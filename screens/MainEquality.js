import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";


const SubRegle = ({ navigation }) => {
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
        style={[styles.positionLogo, styles.positionLogo]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image source={require("../assets/irieya.png")} style={styles.Logo} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.title, styles.positionTitle]}>L'égalité</Text>

      {/* Description */}
      <Text style={[styles.qaBox, styles.positionDescription]}>
      L’égalité homme-femme, bien qu’elle soit un droit fondamental, diffère autour du monde. Si les textes de loi disent que la femme est égale à l’homme depuis des dizaines années, on retrouve dans la majorité des pays du monde une grande inégalité qui peut aller jusqu’à enlever le droit à l’éducation aux femmes.
      </Text>

      {/* Navigation buttons */}
      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton1]}
        onPress={() => navigation.navigate("Equality")}
      >
        <Image source={require("../assets/egalite.jpg")} style={styles.img} />
      </TouchableOpacity>

      <Text style={[styles.title2, styles.PositionTitle1]}>
        L'égalité de genre
      </Text>

      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton2]}
        onPress={() => navigation.navigate("EqualityLimits")}
      >
        <Image source={require("../assets/limites.jpg")} style={styles.img} />
      </TouchableOpacity>

      <Text style={[styles.title2, styles.PositionTitle2]}>
        Les limites de {"\n"}   l'égalité
      </Text>

      <TouchableOpacity
        style={[styles.imgButton, styles.positionButton3]}
        onPress={() => navigation.navigate("CombatActu")}
      >
        <Image source={require("../assets/combat_actu.jpg")} style={styles.img} />
      </TouchableOpacity>

      <Text style={[styles.title2, styles.PositionTitle3]}>
        Un combat toujours{"\n"} d'actualité
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
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
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

  img: {
    height: 160,
    width: 160,
    borderRadius: 80,
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


  positionTitle: {
    position: "absolute",
    top: 100,
    left: 180,
  },

  positionDescription: {
    position: "absolute",
    top: 180,
    fontSize: 15,
    fontFamily: "Nunito",
    marginLeft:15,
  },


  positionButton1: {
    position: "absolute",
    top: 370,
    left: 20,
  },
  PositionTitle1: {
    position: "absolute",
    top: 420,
    left: 200,
  },


  positionButton2: {
    position: "absolute",
    top: 540,
    left: 230,
  },
  PositionTitle2: {
    position: "absolute",
    top: 590,
    left: 30,
  },


  positionButton3: {
    position: "absolute",
    top: 700,
    left: 20,
  },
  PositionTitle3: {
    position: "absolute",
    top: 750,
    left: 190,
  },


  imgButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SubRegle;
