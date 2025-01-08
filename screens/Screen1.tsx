import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground } from 'react-native';
import { ref, set } from 'firebase/database';
import { db } from '../config/Config';  // Asegúrate de que la ruta es correcta

export default function Screen1({ navigation }: any) {
    const [idm, setid] = useState('');
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [especie, setEspecie] = useState('');

    function guardar() {
        if (!idm || !nombre || !edad || !especie) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        // Establecer los datos en Firebase
        set(ref(db, 'mascotas/' + idm), {
            id: idm,
            name: nombre,
            age: edad,
            especie: especie
        })
        .then(() => {
            Alert.alert('Registro Exitoso', `La mascota ${nombre} ha sido registrada.`);
            // Limpiar los campos
            setid('');
            setNombre('');
            setEdad('');
            setEspecie('');
        })
        .catch((error) => {
            Alert.alert('Error', 'Hubo un problema al registrar la mascota. Intenta nuevamente.');
            console.error(error);
        });
    }

    return (
        <ImageBackground
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/13235.jpg" }}
            style={styles.img}
            resizeMode="cover"
        >
            <View style={styles.container}>
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

                <Button color='purple' title="Registrar Mascota" onPress={guardar} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
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
});
