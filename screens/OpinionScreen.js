import React, { useState } from "react";
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
import QuestionConf from "../components/QuestionConfiance";

const OpinionScreen = ({ navigation }) => {
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
          onPress={() => navigation.navigate("MainConfidence")}
        >
          <Text style={styles.buttonText}>retour</Text>
        </TouchableOpacity>
        <Text style={styles.title}>L'opinion des autres</Text>
        <QuestionConf/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },


  Logo: {
    height: 100,
    width: 100,
  },
  LogoPosition: {
    marginBottom: 20,
    left: -140,
    top: 100,
  },
  title: {
    fontSize: 24,
    color: "#333",
    lineHeight: 30,
    letterSpacing: 1,
    padding: 10,
    fontFamily: "Nunito-Bold",
    left: 30,
    top: -40,
    zIndex: 1,
    
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

export default OpinionScreen;
