import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const PickerComponent = () => {
    const [selected, setSelected] = useState("Low");

    const options = ["All", "Low", "Medium", "High"];

    const [fontsLoaded] = useFonts({
        "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
        "NotoSans": require("@/assets/fonts/NotoSans-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    return (
        <View style={styles.container}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option}
                    style={[
                        styles.optionButton,
                        selected === option && styles.selectedButton,
                    ]}
                    onPress={() => setSelected(option)}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selected === option && styles.selectedText,
                        ]}
                    >
                        {option === "All" ?
                            option :
                            <View >
                                <Text style={[
                                    styles.optionText,
                                    selected === option && styles.selectedText,
                                ]}>{option}</Text>
                            </View>}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        gap: 10
    },
    optionButton: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
    },
    selectedButton: {
        borderColor: "#9A42D3",
        backgroundColor: "#f3e9fc",
    },
    optionText: {
        fontFamily: 'NotoSans',
        fontSize: 16,
        color: "#666",
    },
    selectedText: {
        color: "#9A42D3",
        fontWeight: "bold",
    },
});

export default PickerComponent;
