import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({ navigation }: any) {
    return (
        <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg" }}
            style={styles.img}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View >
                    <Text style={styles.title}>HEYDI HERRERA</Text>
                    <Button
                        title='INGRESAR'
                        color={'purple'}
                        onPress={() => navigation.navigate("Botton")}

                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
    },
})