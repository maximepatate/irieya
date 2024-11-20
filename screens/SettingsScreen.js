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

const SettingsScreen = ({ userId, navigation, userToken }) => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <View style={styles.container}>
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
        onPress={() => navigation.navigate("Connect")}
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
