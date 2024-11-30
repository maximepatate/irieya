import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import App from "../components/navBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from "expo-font";


const SettingsScreen = ({ userId, navigation, userToken }) => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken"); // Remove token
    navigation.navigate("Connect"); // Redirect to login page
  };



  // Fetch user profile when component mounts
  useEffect(() => {
    fetch(`https://irieya1-production.up.railway.app/profile`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        return response.json(); // Only call json() once
      })
      .then((data) => {
        // Changed response to data
        if (data) {
          setName(data.name);
          setFirstName(data.firstName);
          setAge(data.age);
          setEmail(data.email);
          setPseudo(data.pseudo);
          setPassword(data.password);
        }
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, [userId]);

  // Update user profile in Firebase
  const handleSaveProfile = () => {
    const updatedProfile = {
      name,
      firstName,
      age,
      email,
      pseudo,
      password,
    };

    fetch(`https://irieya1-production.up.railway.app/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          Alert.alert("Success", "Profile updated successfully");
        } else if (data.error) {
          Alert.alert("Error", data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null; // Render nothing until the font is loaded


  return (
    <View style={styles.container}>

      <Text style={[styles.title, styles.positionTitle]}>
        Réglage
      </Text>

      <TouchableOpacity
        style={styles.logo}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          source={require("../assets/irieya.png")}
          style={styles.profileImg}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Name"
        style={styles.textInput}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="First Name"
        style={styles.textInput}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Age"
        style={styles.textInput}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Pseudo"
        style={styles.textInput}
        value={pseudo}
        onChangeText={setPseudo}
      />
      <TextInput
        placeholder="Mot de passe"
        style={styles.textInput}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button1}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>

      {/* Custom Button for Save Changes */}
      <TouchableOpacity style={styles.button2} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Sauvegarder</Text>
      </TouchableOpacity>
      <App style={styles.navbar} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  textInput: {
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "60%",
    left:60,
    top:100,
    zIndex:2,
  },

  profileImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  logo: {
    marginBottom: 20,
    left:-120,
    top:-70,
  },
  navbar: {
    position: "absolute",
    width: "100%",
    zIndex:1

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

  positionTitle: {
    position: "absolute",
    top: 100,
    left: 145,
  },

  button1: {
    backgroundColor: "#B57BF9", // Blue color for the button
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: "30%",
    alignItems: "center",
    left: 40,
    top: 150, // Adjust the position of the button
    zIndex: 2,
  },
  button2: {
    backgroundColor: "#B57BF9", // Blue color for the button
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: "32%",
    alignItems: "center",
    left: 220,
    top: 99, // Adjust the position of the button
    zIndex: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

});

export default SettingsScreen;
