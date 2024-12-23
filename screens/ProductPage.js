import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Font from "expo-font";
import QuestionProduit from "../components/QuestionProduit";


const ProductScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null;
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.LogoPosition}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            source={require("../assets/irieya.png")}
            style={styles.Logo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("Hygiene")}
        >
          <Text style={styles.buttonText}>retour</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Les Produits</Text>
        <QuestionProduit />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    padding: 20,
    alignItems: "center",
  },
  qaBox: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  Logo: {
    height: 100,
    width: 100,
  },
  LogoPosition: {
    marginBottom: 20,
    left: -120,
    top: 100,
  },
  title: {
    fontSize: 24,
    color: "#333",
    lineHeight: 30,
    letterSpacing: 1,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    fontFamily: "Nunito-Bold",
    left: 20,
    top: -40,
  },
  button2: {
    backgroundColor: "#B57BF9",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: "32%",
    alignItems: "center",
    left: 90,
    top: -60,
    zIndex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductScreen;
