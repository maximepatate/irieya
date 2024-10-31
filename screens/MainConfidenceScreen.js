import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";

const MainConfidenceScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null; // Render nothing until the font is loaded

  return (
    <View style={styles.container}>
      {/* Home navigation */}
      <TouchableOpacity
        style={[styles.positionLogo]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image source={require("../assets/irieya.png")} style={styles.Logo} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.title, styles.positionTitle]}>
        La confiance en soi
      </Text>

      {/* Description */}
      <Text style={[styles.qaBox, styles.positionDescription]}>
      La confiance en soi est l'habileté de croire en soi-même, de se faire confiance et d’être fière de qui nous sommes. 
      La définition semble simple mais la pratique est beaucoup plus complexe qu’elle n’en a l’air. Les talents d’une camarade ou le physique d’une autre sur 
      les réseaux peuvent rapidement intimider et par conséquent empêcher la confiance en soi. 
      </Text>

      {/* Navigation buttons */}
      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton1]}
        onPress={() => navigation.navigate("Estime")}
      >
        <Image source={require("../assets/estime_de_soi.jpg")} style={styles.img} />
      </TouchableOpacity>

      <Text style={[styles.title2, styles.positionH]}>
        L'estime de soi
      </Text>

      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton2]}
        onPress={() => navigation.navigate("Opinion")}
      >
        <Image
          source={require("../assets/opinion_des_autres.jpg")}
          style={styles.img}
        />
      </TouchableOpacity>

      <Text style={[styles.title2, styles.positionP]}>
      L'opinion des {"\n"}      autres{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
  },
  Logo: {
    height: 100,
    width: 100,
  },

  positionLogo: {
    position: "absolute",
    top: 70,
    left: 20,
  },

  qaBox: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
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
  },
  title2: {
    fontSize: 20,
    color: "#333",
    lineHeight: 30,
    letterSpacing: 1,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    fontFamily: "Nunito-Bold",
  },
  img: {
    height: 160,
    width: 160,
    borderRadius: 80,
  },

  positionTitle: {
    position: "absolute",
    top: 100,
    left: 130,
  },
  positionDescription: {
    position: "absolute",
    top: 180,
    fontSize: 15,
    fontFamily: "Nunito",
  },
  positionButton1: {
    position: "absolute",
    top: 370,
    left: 20,
  },
  positionButton2: {
    position: "absolute",
    top: 570,
    left: 230,
  },
  positionH: {
    position: "absolute",
    top: 420,
    left: 200,
  },
  positionP: {
    position: "absolute",
    top: 630,
    left: 30,
  },

  // Consolidated button container for the images
  imgButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainConfidenceScreen;
