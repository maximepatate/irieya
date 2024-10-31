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
import QuestionSexism from "../components/QuestionSexism";

const SexismScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={[styles.logo, styles.Position1]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            source={require("../assets/irieya.png")}
            style={styles.profileImg}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Le Sexisme</Text>
        <Text style={styles.qaBox}>
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
        <QuestionSexism />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  logo: {
    marginBottom: 20,
    left: -120,
    top: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textTransform: "uppercase",
    textDecorationLine: "underline",
    left: 30,
  },
});

export default SexismScreen;
