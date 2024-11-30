import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  TouchableOpacity
} from "react-native";
import Dropdown from "../components/dropDown";
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async () => {

    const data = {
      email: email,
      password: password,
      pseudo: pseudo,
      name: name,
      firstName: firstName,
      age: age,
      gender:gender,
    };
    try {
      const response = await fetch("https://irieya1-production.up.railway.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.status === "success") {
        setSuccessMessage("Sign-up successful!");
        setError("");

        if (responseData.token) {
          // Save the token to AsyncStorage
          await AsyncStorage.setItem("userToken", responseData.token);
          console.log("Token saved successfully.");
          navigation.navigate("HomePage"); // Redirect to HomePage
        } else {
          alert("Sign-up succeeded, but no token received.");
        }
      } else if (responseData.message) {
        setError(responseData.message);
        setSuccessMessage("");

        // Display user-friendly error message
        Alert.alert("Sign-up Error", responseData.message);
    }
  } catch (error) {
    console.error("Error during sign-up:", error);
    Alert.alert("Error", "An unexpected error occurred. Please try again.");
  }
};


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="nom"
        style={styles.textInput}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="prénom"
        style={styles.textInput}
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        placeholder="âge"
        style={styles.textInput}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="exemple@gmail.com"
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="mot de passe"
        style={styles.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="pseudo"
        style={styles.textInput}
        value={pseudo}
        onChangeText={setPseudo}
      />

      <Dropdown 
        value={gender}
        onValueChange={setGender}
      />

      <TouchableOpacity style={styles.button1} onPress={handleSignUp}>
        <Text style={styles.buttonText}>créer le compte</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("Connect")}
      >
        <Text style={styles.buttonText}>retour</Text>
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

  errorText: {
    marginTop: 20,
    color: 'red',
  },
  successText: {
    marginTop: 20,
    color: 'green',
  },

  button1: {
    backgroundColor: "#B57BF9", // Blue color for the button
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    width: "30%",
    alignItems: "center",
    left: -90,
    top: -10,


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
    

  },
  buttonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default SignUpPage;
