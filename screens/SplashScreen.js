import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem("userToken");
            if (token) {
                fetch("https://irieya1-production.up.railway.app/verify-token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                })
                    .then(response => response.json())
                    .then((data) => {
                        if (data.status === "success") {
                            navigation.navigate("HomePage"); // If valid token
                        } else {
                            navigation.navigate("Connect"); // If invalid token
                        }
                    })
                    .catch(() => navigation.navigate("Connect"));
            } else {
                navigation.navigate("Connect");
            }
        };

        checkToken();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
        </View>
    );
};

export default SplashScreen;
