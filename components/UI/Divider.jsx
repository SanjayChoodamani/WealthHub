import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = ({ color = "#ccc", thickness = 1, marginVertical = 5 }) => {
    return (
        <View
            style={[
                styles.divider,
                {
                    backgroundColor: color,
                    height: thickness,
                    marginVertical: marginVertical,
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    divider: {
        width: "90%",
        left: "5%",
    },
});

export default Divider;
