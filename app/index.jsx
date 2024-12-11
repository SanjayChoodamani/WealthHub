import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";


import Header from "@/components/header";
import PickerComponent from "@/components/PickerComponent";
import Divider from "@/components/UI/Divider";
import CheckboxList from "@/components/CheckboxList";
import MutualFundList from "@/components/FundList";

export default function Index() {
  const [fontsLoaded] = useFonts({
    "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
    "NotoSans": require("@/assets/fonts/NotoSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header />
        <View style={styles.container} >
          <View style={styles.riskContainer}>
            <Text style={styles.riskHeading} >Risk Profile</Text>
            <Text style={styles.riskText}>
              Lorem ipsum dolor sit amet.
            </Text>
            <View style={styles.riskPicker} >
              <PickerComponent />
            </View>
          </View>
          <Divider />
          <View style={styles.riskContainer}>
            <Text style={styles.riskHeading}>
              Fund Type
            </Text>
            <Text style={styles.riskText}>Lorem ipsum dolor sit amet, </Text>
            <CheckboxList />
          </View>
          <Divider />
          <View style={styles.mutualConatiner} >
            <MutualFundList />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  riskContainer: {
    padding: 20,
  },
  riskHeading: {
    fontFamily: "CharmanSerif",
    fontSize: 25,

    fontWeight: "condensedBold",
    marginBottom: 5,
  },
  riskText: {
    fontFamily: "NotoSans",
    fontSize: 16,
    color: "grey",
  },
  riskPicker: {
    maringVertical: 30,
    width: '80%'
  },
  mutualConatiner: {
    padding: 20,
  }
});