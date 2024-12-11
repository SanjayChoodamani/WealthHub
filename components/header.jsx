import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from "expo-font";

const header = () => {

    const [fontsLoaded] = useFonts({
        "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
        "NotoSans": require("@/assets/fonts/NotoSans-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    return (
        <View style={styles.headerContainer} >
            <View style={styles.headerBack}>
                <Ionicons name="arrow-back-circle-outline" size={24} color="grey" />
                <Text style={styles.headerText}>Filter</Text>
            </View>
            <View>
                <Pressable>
                    <Text style={styles.resetStyle}>Reset</Text>
                </Pressable>
            </View>
        </View>

    )
}

export default header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        backgroundColor: 'white'
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    headerText: {
        fontFamily: 'CharmanSerif',
        fontSize: 25,
        fontWeight: 'condensedBold'
    },
    resetStyle: {
        fontSize: 16,
        color: '#9A42D3',
        fontFamily: 'NotoSans'
    },

})