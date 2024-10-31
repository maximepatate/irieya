import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet } from "react-native";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: "Select an option...",
    value: null,
  };

  const options = [
    { label: "Homme", value: "Homme" },
    { label: "Femme", value: "Femme" },
  ];

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "60%",
    justifyContent: "center",
  },
  item: {},
});

export default Dropdown;
