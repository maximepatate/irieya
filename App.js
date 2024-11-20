import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Settings,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SignUpPage from "./screens/SignUpPage";
import ConnectPage from "./screens/ConnectPage";
import RegleMain from "./screens/RegleScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MainHygiene from "./screens/MainHygiene";
import ProductScreen from "./screens/ProductPage";
import EqualityScreen from "./screens/EqualitySubScreen";
import SubEqualitySreen from "./screens/MainEquality";
import EqualityLimitsScreen from "./screens/EqualityLimitsScreen";
import CombatActuScreen from "./screens/CombatActuScreen";
import SexismScreen from "./screens/MainSexismScreen";
import EstimePage from "./screens/EstimeScreen";
import OpinionScreen from "./screens/OpinionScreen";
import MainConfidenceScreen from "./screens/MainConfidenceScreen";





export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Connect"
        component={ConnectPage}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
      />
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Regle"
        component={RegleMain}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        name="Hygiene"
        component={MainHygiene}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
      />
      <Stack.Screen
        name="Equality"
        component={EqualityScreen}
      />
      <Stack.Screen
        name="SubEquality"
        component={SubEqualitySreen}
      />
      <Stack.Screen
        name="EqualityLimits"
        component={EqualityLimitsScreen}
      />
      <Stack.Screen
        name="CombatActu"
        component={CombatActuScreen}
      />
      <Stack.Screen
        name="Sexism"
        component={SexismScreen}
      />
      <Stack.Screen
        name="Opinion"
        component={OpinionScreen}
      />
      <Stack.Screen
        name="Estime"
        component={EstimePage}
      />
      <Stack.Screen
        name="MainConfidence"
        component={MainConfidenceScreen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
