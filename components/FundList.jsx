import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useFonts } from "expo-font";


const MutualFundList = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const data = [
        {
            id: "1",
            name: "ICICI Prudential Mutual Fund",
            icon: "https://static.vecteezy.com/system/resources/previews/020/336/263/non_2x/icici-logo-icici-icon-free-free-vector.jpg",
        },
        {
            id: "2",
            name: "SBI Mutual Fund",
            icon: "https://unlistedzone.com/storage/company-logo/392/sbi_mutual_fund_unlisted_shares-logo-1705405591.png",
        },
        {
            id: "3",
            name: "Mirae Asset Management",
            icon: "https://images.dhan.co/Mutual_Fund/amc_images/light/28628.png",
        },
        {
            id: "4",
            name: "Mirae Asset Management",
            icon: "https://images.dhan.co/Mutual_Fund/amc_images/light/28628.png",
        },
        {
            id: "5",
            name: "Mirae Asset Management",
            icon: "https://images.dhan.co/Mutual_Fund/amc_images/light/28628.png",
        },
    ];
    const [fontsLoaded] = useFonts({
        "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
        "NotoSans": require("@/assets/fonts/NotoSans-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    const toggleItemSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const toggleSelectAll = () => {
        if (selectedItems.length === data.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(data.map((item) => item.id));
        }
    };

    const isSelected = (id) => selectedItems.includes(id);

    return (
        <View style={styles.conatin}>
            <View style={styles.header}>
                <Text style={styles.title}>AMC</Text>
                <TouchableOpacity onPress={toggleSelectAll}>
                    <Text style={styles.selectAll}>
                        {selectedItems.length === data.length ? "Deselect All" : "Select All"}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>Lorem ipsum dolo ra samet ina ki</Text>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => toggleItemSelection(item.id)}
                    >
                        <Image
                            source={{ uri: item.icon }}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                        <Text style={styles.itemText}>{item.name}</Text>
                        <View
                            style={[
                                styles.checkbox,
                                isSelected(item.id) && styles.checkboxSelected,
                            ]}
                        >
                            {isSelected(item.id) && (
                                <Icon name="check" size={16} color="#fff" />
                            )}
                        </View>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: "condesedBold",
        color: "#000",
        fontFamily: "CharmanSerif",
    },
    selectAll: {
        fontSize: 16,
        color: "#9A42D3",
        fontWeight: "600",
        fontFamily: "NotoSans",
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 16,
        fontFamily: "NotoSans",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
        backgroundColor: "#ddd",
    },
    itemText: {
        fontSize: 16,
        flex: 1,
        color: "#000",
        fontFamily: "NotoSans",
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    checkboxSelected: {
        backgroundColor: "#9A42D3",
        borderColor: "#9A42D3",
    },
    listContent: {
        paddingBottom: 16,
    },
});

export default MutualFundList;
