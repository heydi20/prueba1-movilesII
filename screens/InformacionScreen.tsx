import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface InfoProps {
  datos: any[];
}

const InformacionScreen: React.FC<InfoProps> = ({ datos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información de Mascotas</Text>
      {datos.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemText}>Nombre: {item.name}</Text>
          <Text style={styles.itemText}>Edad: {item.age}</Text>
          <Text style={styles.itemText}>Especie: {item.especie}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#e2e2e2',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
});

export default InformacionScreen;
