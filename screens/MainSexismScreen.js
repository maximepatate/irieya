import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Font from "expo-font";

import QuestionSexism from "../components/QuestionSexism";

const SexismScreen = ({ navigation }) => {
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
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <TouchableOpacity
        style={[styles.positionLogo]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image source={require("../assets/irieya.png")} style={styles.Logo} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.title, styles.positionTitle]}>
      Le Sexisme
      </Text>

      {/* Description */}
      <Text style={[styles.qaBox, styles.positionDescription]}>
          Selon le dictionnaire Le Robert, le sexisme correspond à une «
          attitude de discrimination fondée sur le sexe (spécialement,
          discrimination à l'égard du sexe féminin). »Si nous ne sommes plus à
          l’époque où les femmes ne pouvaient ni travailler ni voter, ce fléau
          est encore présent dans notre quotidien, et il est fondamental de le
          combattre. Au cours de l’histoire, de nombreuses personnes se sont
          battues pour un monde plus égal, et nous vivons aujourd’hui en
          bénéficiant des avantages gagnés grâce à cela. Comment peut-on ne pas
          se dire féministe lorsqu’on est une femme et qu’on travaille ou qu’on
          prévoit de le faire ? Lorsqu'on exprime son opinion publiquement?
          Comment ne pas se dire féministe lorsqu’on collabore
          professionnellement avec des femmes ? Lorsque nos enfants sont
          enseignés par des femmes à l’école ? "Feminism is the radical notion
          that women are people." — Marie Shear, 1986 (Le Féminisme est la
          notion radicale que les femmes sont des gens)
      </Text>
      <QuestionSexism/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  Logo: {
    height: 100,
    width: 100,
  },
  positionLogo: {
    top: 40,
    left: -130,  
  },

  qaBox: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
  },
  positionDescription: {
    top: 5,
    fontSize: 15,
    fontFamily: "Nunito",
    marginBottom:-15,
    marginLeft:-15,
    marginRight:-15,
  },

  title: {
    fontSize: 25,
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
  positionTitle: {
    top: -20,
    left: 30,
  },



  scrollViewContent: {
    padding: 30, // Add padding for spacing
    alignItems: "center",
  },


});

export default SexismScreen;
