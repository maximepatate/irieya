import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from "expo-font";

const QuestionSexism = () => {
  // Sample question and answer data
  const qaItems = [
    {
      id: 1,
      question: "Aujourd'hui, au 21e siècle, qu’est-ce que le sexisme représente réellement dans nos vies ?",
      answer: (
        <>
          Les situations où la misogynie surgit dans nos vies sont nombreuses, allant de moqueries à l'agression sexuelle*. 
          Cela se produit lorsque les capacités des femmes à disposer de leur corps et de leur vie sont remises en question. 
          Lorsqu’un camarade ou professeur de sport remet en question les capacités physiques d’une fille. Lorsqu’une tante résume la valeur 
          d’une jeune fille à sa capacité à trouver un époux. Lorsque la société établit des critères de beauté spécifiquement pour ce genre. 
          {"\n"}Lorsque le monde estime qu’en tant que femme, il serait honteux de dépasser un certain poids, une certaine taille, une pointure, 
          ou une quantité de poils. Lorsque, lors d’un événement, il est attendu que seules les jeunes filles contribuent au service. 
          
          {"\n\n"}    Comme la féministe Chimamanda Ngozi Adichie l’a dit :
          {"\n\n"}    “We raise girls to see each other as competitors, 
          {"\n\n"}    Not for jobs or for accomplishments 
          {"\n\n"}    Which I think can be a good thing, 
          {"\n\n"}    But for the attention of men”
          {"\n\n"}
          {"\n\n"}    [Nous élevons les filles pour qu'elles se  considèrent comme des concurrentes,
          {"\n\n"}    Pas pour les emplois ou les accomplissements,
          {"\n\n"}    Ce qui je pense est une bonne chose, 
          {"\n\n"}    Mais pour l’attention des hommes.]
          {"\n\n"} 
          {"\n\n"}Certains exemples paraissent plus inoffensifs que d’autres, mais en réalité, 
          ils mènent tous progressivement aux mêmes idéaux. Si, depuis l’enfance, on apprend à une 
          enfant qu’elle doit se préparer à être soumise, tolérante, et bonne épouse, qu’est-ce qui l'empêcherait de tolérer la violence et les abus ? 
          La jeunesse est le futur. Une phrase qui, bien qu'ordinaire, signifie que le travail pour changer les mentalités doit commencer chez les enfants.

          {"\n\n"}La déconstruction est difficile lorsque l’on vit et grandit dans une société patriarcale. Plus qu’un combat opposant les hommes et les femmes, 
          elle nous concerne tous autant que nous sommes. Il est de notre propre responsabilité d’identifier les préjugés et attentes sexistes que nous avons intégrés 
          et de travailler à nous améliorer; une des missions principales d’Irieya.

          {"\n\n"} <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}> 
            
            *Si vous subissez une agression, Akwaba Mousso peut vous apporter une aide médicale, juridique, psychologique, et un logement.
            {"\n"}Contactez le +225 07 69 84 84 84 ou le +225 05 07 48 60 70.

          </Text>

        </>
      ),
    },
    {
      id: 2,
      question: "En quoi la violence basée sur le genre (VBG) est-elle une forme de sexisme ?",
      answer:  (
        <>
        Les Violences Basées sur le Genre (VBG) englobent toutes formes de violence dirigées contre une personne en raison 
        de son genre, comme la violence domestique, le harcèlement sexuel, les agressions sexuelles, les mutilations génitales 
        féminines, et les mariages forcés. Elles touchent principalement les femmes et les filles et environ 1 femme sur 3 dans le monde subit 
        des violences physiques ou sexuelles. {"\n\n"}Plus de 200 millions de filles et femmes ont subi des mutilations génitales telles que l’excision. 
        Les VBG ont de graves conséquences sur la santé physique et mentale des victimes et la lutte contre ces violences nécessite prévention, 
        protection, justice, et éducation à l'égalité de genre. Les victimes peuvent trouver de l'aide via des lignes d'assistance 
        (comme le 07 69 84 84 84 ou le 05 07 48 60 70 en Côte d’Ivoire), des centres d'accueil, et un soutien juridique et psychologique.
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

const AppWrapperSexism = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null; // Render nothing until font is loaded

  return <QuestionSexism />; // Render the main component after fonts are loaded
};

const styles = StyleSheet.create({

  container: {
    marginBottom:30,

  },
  qaBox: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
    top:40,
  },
  question: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "Nunito-Bold",
    },
  answer: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Nunito",
  },
  button: {
    color: '#007bff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    backgroundColor: '#B57BF9',
    padding: 2,
    borderRadius: 20,
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

export default AppWrapperSexism;
