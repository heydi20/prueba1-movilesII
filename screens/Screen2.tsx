import { StyleSheet, Text, View, FlatList, Alert, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/Config'; // Asegúrate de tener esta configuración bien hecha

import Informacion from './InformacionScreen'; // Importa el componente para mostrar más detalles
import InformacionScreen from './InformacionScreen';

export default function Screen2() {
  const [datos, setDatos] = useState<any[]>([]);
  const [idBuscado, setIdBuscado] = useState<string>('');  // Estado para el ID ingresado
  const [mascotaFiltrada, setMascotaFiltrada] = useState<any | null>(null);  // Estado para la mascota filtrada

  useEffect(() => {
    leer();
  }, []);

  /////// LEER ////
  function leer() {
    const starCountRef = ref(db, 'mascotas/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        let lista = Object.keys(data).map((idm) => ({
          idm,
          ...data[idm],
        }));
        setDatos(lista);
      }
    });
  }

  // Mostrar más información cuando se presiona un elemento
  function mostrarInformacion(item: any) {
    Alert.alert('Información', `Nombre: ${item.nombre}\nEdad: ${item.edad}\nEspecie: ${item.especie}`);
  }

  // Filtrar mascota por ID
  function filtrarPorId() {
    const mascota = datos.find((item) => item.idm === idBuscado);
    if (mascota) {
      setMascotaFiltrada(mascota);
    } else {
      Alert.alert('Error', 'No se encontró una mascota con ese ID.');
      setMascotaFiltrada(null);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Mascotas</Text>

      {/* Sección para buscar mascota por ID */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa el ID de la mascota"
        value={idBuscado}
        onChangeText={setIdBuscado}
        keyboardType="numeric"
      />
      <Button title="Buscar por ID" onPress={filtrarPorId} color="purple" />

      {/* Mostrar los detalles de la mascota filtrada si existe */}
      {mascotaFiltrada ? (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Nombre: {mascotaFiltrada.name}</Text>
          <Text style={styles.itemText}>Edad: {mascotaFiltrada.age}</Text>
          <Text style={styles.itemText}>Especie: {mascotaFiltrada.especie}</Text>
        </View>
      ) : (
        <Text>No hay resultados para el ID ingresado.</Text>
      )}

      {/* Segunda sección: Lista con un campo */}
      <FlatList
        data={datos}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.age}</Text>
            <Text style={styles.itemText}>{item.especie}</Text>

            {/* Al hacer clic en un ítem, mostrar la información completa */}
            <Text style={styles.infoText} onPress={() => mostrarInformacion(item)}>
              Ver más
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.idm}
      />

      {/* Pasamos datos a Informacion.tsx */}
      <InformacionScreen datos={datos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
  infoText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
