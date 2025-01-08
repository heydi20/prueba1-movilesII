/*import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';
import { ref, set, remove, onValue } from 'firebase/database';
import { db } from '../config/Config'; // Asegúrate de tener la configuración de Firebase

export default function Screen3({ route, navigation }: any) {
   /* // Recibimos el ID de la mascota que se quiere editar desde el Screen2 o alguna navegación previa
    const [idm, setid] = useState('');
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [especie, setEspecie] = useState('');

    // Cargar datos de la mascota
    useEffect(() => {
        // Función para obtener los datos de la mascota por ID
        const obtenerDatos = () => {
            const starCountRef = ref(db, 'mascotas/' + idm);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setNombre(data.name);
                    setEdad(data.age);
                    setEspecie(data.especie);
                }
            });
        };

        obtenerDatos();
    }, [idm]);

    // Función para actualizar un registro
    const editarRegistro = () => {
        set(ref(db, 'mascotas/' + idm), {
            id: idm,
            name: nombre,
            age: edad,
            especie: especie,
        });

        Alert.alert('Éxito', 'El registro ha sido editado correctamente.');
    };

    // Función para eliminar un registro
    const eliminarRegistro = () => {
        Alert.alert('Confirmar Eliminación', '¿Estás seguro de que deseas eliminar este registro?', [
            {
                text: 'Cancelar',
                style: 'cancel',
            },
            {
                text: 'Eliminar',
                onPress: () => {
                    remove(ref(db, 'mascotas/' + idm))
                        .then(() => {
                            Alert.alert('Éxito', 'El registro ha sido eliminado correctamente.');
                            navigation.goBack(); // Regresar a la pantalla anterior
                        })
                        .catch((error) => {
                            Alert.alert('Error', 'Hubo un error al eliminar el registro.');
                        });
                },
            },
        ]);
    };

    return (
        <ImageBackground
            source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/13235.jpg' }}
            style={styles.img}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.title}>Editar Mascota</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre de la mascota"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Edad de la mascota"
                    keyboardType="numeric"
                    value={edad}
                    onChangeText={setEdad}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Especie de la mascota"
                    value={especie}
                    onChangeText={setEspecie}
                />

                <Button title="Editar Registro" color="purple" onPress={editarRegistro} />
                <Button title="Eliminar Registro" color="red" onPress={eliminarRegistro} />
            </View>
        </ImageBackground>
    );
}*/

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    img: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
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
});*/

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ref, remove, update } from 'firebase/database';
import { db } from '../config/Config';
import { TextInput } from 'react-native-gesture-handler';

export default function Screen3() {
    const [idm, setid] = useState('');
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [especie, setEspecie] = useState('');

    function eliminar() {
        remove(ref(db, 'mascotas/' + idm));
    }

    function editar() {
        update(ref(db, 'mascotas/' + idm), {
            id: idm,
            name: nombre,
            age: edad,
            especie: especie
        });
    }

    return (
        <View>
            <View>
                <Text>Eliminar</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ingresar ID'
                    keyboardType='numeric'
                    onChangeText={(texto) => setid(texto)}
                />
                <Button color='red' title="Eliminar" onPress={() => eliminar()} />
            </View>
            <View>
                <Text style={styles.title}>Registrar Mascota</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ID de la mascota"
                    keyboardType="numeric"
                    value={idm}
                    onChangeText={(texto) => setid(texto)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Nombre de la mascota"
                    value={nombre}
                    onChangeText={(texto) => setNombre(texto)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Edad de la mascota"
                    keyboardType="numeric"
                    onChangeText={(texto) => setEdad(texto)}
                    value={edad}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Especie (ej. perro, gato)"
                    value={especie}
                    onChangeText={(texto) => setEspecie(texto)}
                />

                <Button color='purple' title="Editar" onPress={() => editar()} />

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
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
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
})
