import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const SubRegle = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Home navigation */}
      <TouchableOpacity
        style={[styles.logo, styles.positionLogo]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image source={require("../assets/irieya.png")} style={styles.profileImg} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.title, styles.positionTitle]}>L'égalité</Text>

      {/* Description */}
      <Text style={[styles.qaBox, styles.positionDescription]}>
      L’égalité homme-femme est un sujet qui bien qu’elle soit un droit fondamental diffère autour du monde 
      </Text>

      {/* Navigation buttons */}
      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton1]}
        onPress={() => navigation.navigate("Equality")}
      >
        <Image source={require("../assets/egalite.jpg")} style={styles.img} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton2]}
        onPress={() => navigation.navigate("EqualityLimits")}
      >
        <Image source={require("../assets/limites.jpg")} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton3]}
        onPress={() => navigation.navigate("CombatActu")}
      >
        <Image source={require("../assets/combat_actu.jpg")} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 40,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 30,
    letterSpacing: 1,
    padding: 10,
    textTransform: "uppercase",
    textDecorationLine: "underline",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 50,
  },

  // Reusable position styles
  positionLogo: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  positionTitle: {
    position: "absolute",
    top: 80,
    left: 130,
  },
  positionDescription: {
    position: "absolute",
    top: 150,
  },
  positionButton1: {
    position: "absolute",
    top: 250,
    left: 130,
  },
  positionButton2: {
    position: "absolute",
    top: 440,
    left: 130,
  },

  positionButton3: {
    position: "absolute",
    top: 600,
    left: 130,
  },

  // Consolidated button container for the images
  imgButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SubRegle;
