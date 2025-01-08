
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
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
        Alert.alert('Éxito', 'El registro ha sido eliminado correctamente.');
    }

    function editar() {
        update(ref(db, 'mascotas/' + idm), {
            id: idm,
            name: nombre,
            age: edad,
            especie: especie
        });
        Alert.alert('Éxito', 'El registro ha sido editado correctamente.');
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
