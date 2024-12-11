import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFonts } from "expo-font";


const CheckboxList = () => {
    const [selectedOption, setSelectedOption] = useState("Growth");

    const options = [
        { label: "Growth", value: "Growth" },
        { label: "Dividend", value: "Dividend" },
    ];
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
                    key={option.value}
                    style={styles.optionContainer}
                    onPress={() => setSelectedOption(option.value)}
                >
                    <Text
                        style={[
                            styles.label,
                            selectedOption === option.value && styles.selectedLabel,
                        ]}
                    >
                        {option.label}
                    </Text>
                    <View
                        style={[
                            styles.checkbox,
                            selectedOption === option.value && styles.selectedCheckbox,
                        ]}
                    >
                        {selectedOption === option.value && (
                            <Icon name="check" size={16} color="#fff" />
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: "#333",
        flex: 1,
        fontFamily: 'NotoSans'
    },
    selectedLabel: {
        color: "#9A42D3",
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },
    selectedCheckbox: {
        backgroundColor: "#9A42D3",
        borderColor: "#9A42D3",
    },
});

export default CheckboxList;
