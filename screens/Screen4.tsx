import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import datos from '../assets/data/peliculas.json'
import { FlatList } from 'react-native-gesture-handler'
import Tarjeta from '../components/Tarjeta';

export default function Screen4() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        async function leer() {
            const resp = await fetch('https://jritsqmet.github.io/web-api/peliculas2.json');
            const json = await resp.json();
            setDatos(json);
        }
        leer();
    }, []);

    return (
        <ImageBackground
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/19.jpg" }}
            style={styles.img}
        >
            <View>
                <Text style={styles.title}>Peliculas</Text>
                <FlatList
                    data={datos}
                    renderItem={({ item }) =>
                        <Tarjeta informacion={item} />
                    }
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white'
    },
    img: {
        flex: 1,
        //justifyContent: 'center',
    },
});