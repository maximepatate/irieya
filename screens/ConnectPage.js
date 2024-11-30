import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

const ConnectPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
  
    try {
      const response = await fetch("https://irieya1-production.up.railway.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // Check if response is valid JSON
      let responseData;
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        const textData = await response.text(); // Read as text for debugging
        console.error("Unexpected response format:", textData);
        alert("Unexpected response from server. Please try again.");
        return;
      }
  
      if (!response.ok) {
        alert("Login failed: " + (responseData.message || "Unknown error"));
        return;
      }
  
      console.log("Login response:", responseData);
  
      if (responseData.status === "success") {
        // Save the token in AsyncStorage
        if (responseData.token) {
          await AsyncStorage.setItem("userToken", responseData.token);
          console.log("Token saved successfully.");
          navigation.navigate("HomePage"); // Navigate to home page
        } else {
          alert("Login succeeded, but no token received.");
        }
      } else if (responseData.message) {
        setError(responseData.message);
        setSuccessMessage("");

        // Display user-friendly error message
        Alert.alert("Sign-up Error", responseData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error: " + error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/irieya.png")}
        style={styles.logo}
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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",

  },

  textInput: {
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "60%",
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  button1: {
    backgroundColor: "#B57BF9", // Blue color for the button
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
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
    borderRadius: 20,
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
