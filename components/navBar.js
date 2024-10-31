import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"; 

function LobbyButton() {
  return <View style={styles.container}></View>;
}

function SettingsScreen() {
  return <View style={styles.container}></View>;
}

const HomeStack = createNativeStackNavigator();

function LobbyStackButton() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={LobbyButton} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptioxns={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const navigation = useNavigation(); // Access navigation

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* Home / Lobby Tab */}
      <Tab.Screen
        name="Lobby"
        component={LobbyStackButton}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate("HomePage"); // Navigate to the "Home" screen
              }}
            >
              <Text style={styles.tabText}>Accueil</Text>
            </TouchableOpacity>
          ),
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      {/* Settings Tab */}
      <Tab.Screen
        name="SettingS"
        component={SettingsStackScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                navigation.navigate("Settings"); // Navigate to the "Settings" screen
              }}
            >
              <Text style={styles.tabText}>Réglage</Text>
            </TouchableOpacity>
          ),
          tabBarLabel: "Réglage",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    color: "#000",
    textAlign: "center",
    padding: 10,
  },
});
