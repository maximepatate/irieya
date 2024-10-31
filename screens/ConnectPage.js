import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const ConnectPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    fetch("https://irieya1-production.up.railway.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 204) {
          // No Content
          return null;
        }
        return response.json(); // Parse JSON only if response is not empty
      })
      .then((data) => {
        if (data) {
          if (data.status === "success") {
            navigation.navigate("HomePage");
          } else {
            alert("Login failed: " + data);
          }
        } else {
          console.log("No content received");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error: " + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/irieya_logo_transparent.png")}
        style={styles.profileImg}
      />
      <TextInput
        placeholder="email"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="mot de passe"
        style={styles.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button1} onPress={handleLogin}>
        <Text style={styles.buttonText}>se connecter</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>créer un compte</Text>
      </TouchableOpacity>

      <Button
        title="modérateur"
        onPress={() => navigation.navigate("HomePage")}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  textInput: {
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "60%",
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  button1: {
    backgroundColor: "#B57BF9", // Blue color for the button
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    left: -90,
    top: -10, // Adjust the position of the button
    zIndex: 2,
  },
  button2: {
    backgroundColor: "#B57BF9", 
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: "32%",
    alignItems: "center",
    left: 90,
    top: -60, 
    zIndex: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ConnectPage;
