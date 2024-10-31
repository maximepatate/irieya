import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import App from "../components/navBar";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.regle, styles.randomPosition1]}
        onPress={() => navigation.navigate("SubRegle")}
      >
        <View style={styles.profileImg}>
          <Image
            source={require("../assets/hygiene_feminine.jpg")}
            style={styles.profileImg}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.savoir, styles.randomPosition2]}
        onPress={() => navigation.navigate("SubEquality")}
      >
        <Image
          source={require("../assets/egalite.jpg")}
          style={styles.profileImg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.confidence, styles.randomPosition3]}
        onPress={() => navigation.navigate("MainConfidence")}
      >
        <Image
          source={require("../assets/confiance.jpg")}
          style={styles.profileImg}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.confidence, styles.randomPosition4]}
        onPress={() => navigation.navigate("Sexism")}
      >
        <Image
          source={require("../assets/sexisme.jpg")}
          style={styles.profileImg}
        />
      </TouchableOpacity>
      <View style={[styles.centeredImage]}>
        <Image
          source={require("../assets/irieya_logo_transparent.png")}
          style={styles.logo}
        />
      </View>

      <App style={styles.navbar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    height: 250,
    width: 250,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "60%",
  },

  regle: {
    marginLeft: 40,
    height: 200,
    width: 300,
    borderRadius: 80,
  },

  profileImg: {
    height: 160,
    width: 160,
    borderRadius: 80,
  },



  savoir: {
    marginLeft: 8,
    height: 100,
    width: 80,
  },

  confidence: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },

  navbar: {
    width: "100%",
    zIndex: 1,
  },

  randomPosition1: {
    top: 160, // Randomized top position
    left: -10, // Randomized left position
    zIndex: 2,
  },
  randomPosition2: {
    top: 350,
    left: 230,
    zIndex: 2,
  },
  randomPosition3: {
    top: -100,
    left: 220,
    zIndex: 2,
  },
  randomPosition4: {
    top: 180,
    left: 30,
    zIndex: 2,
  },
  centeredImage: {
    top: -150,
    left: 80,
    zIndex: 2,
  },
  bubbleText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default HomeScreen;
