import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from "expo-font";

const QuestionEquality = () => {
  // Sample question and answer data
  const qaItems = [
    {
      id: 1,
      question: "Qu’est ce que l’égalité ?",
      answer: (
        <>
          L’égalité est l’absence de toute discrimination entre les êtres humains, sur le plan de leurs droits. 
          {"\n"}Plusieurs types d’égalité existent : l’égalité politique, civile ou sociale.
          {"\n\n"}
         
        </>
      ),
    },
    {
      id: 2,
      question: "Qu’est ce que la parité des sexes ou égalité homme-femme ?",
      answer: (
        <>
         On parle de parité des sexes lorsque les femmes et les hommes ont le même statut et qu’ils 
         bénéficient des mêmes conditions pour pleinement réaliser leurs droits fondamentaux. 
         {"\n\n"}Ces derniers sont également sur le même piédestal lorsqu’il s’agit de contribuer au 
         développement national, politique, économique, social et culturel et bénéficier des résultats. 
         Ainsi chaque sexe est égal dans les institutions.
          
         
        </>
      ),
    },
    {
      id: 3,
      question: "Pouvons-nous considérer aujourd’hui que nous vivons dans un monde où les hommes et les femmes sont égaux? ",
      answer: (
        <>
          Cette question est souvent source de conflit dans de nombreuses parties du monde aujourd'hui. 
          Bien qu'auparavant il n’y avait aucun doute sur la réponse qui était un non catégorique, aujourd’hui, plusieurs personnes considèrent que 
          les hommes et les femmes sont égaux. {"\n\n"}Cependant, de notre point de vue, nous ne pouvons pas parler de parité des sexes aujourd’hui pour 
          la simple et bonne raison que dans certains pays, les femmes ne sont toujours pas libres. Même dans les pays où l’on dit que l’égalité est 
          la plus présente, les deux sexes ne sont pas totalement égaux. Il y a toujours quelques différences de traitement apparentes entre les hommes et les femmes. 
         
         
        </>
      ),
    },
  ];

  // State to track which questions are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Function to toggle the answer visibility for a specific question
  const toggleAnswer = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific item's expanded state
    }));
  };

  return (
    <View style={styles.container}>
      {qaItems.map((item) => (
        <View key={item.id} style={styles.qaBox}>
          {expandedItems[item.id] ? (
            <Text style={styles.answer}>{item.answer}</Text>
          ) : (
            <Text style={styles.question}>{item.question}</Text>
          )}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => toggleAnswer(item.id)}
          >
            <Text style={styles.buttonText}>
              {expandedItems[item.id] ? "^" : "réponse"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  qaBox: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  question: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    color: '#007bff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    backgroundColor: '#B57BF9',
    padding: 2,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
    alignSelf:"center",
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuestionEquality;
