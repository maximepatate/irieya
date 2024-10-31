import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from "expo-font";

const QuestionEstime = () => {
  // Sample question and answer data
  const qaItems = [
    {
      id: 1,
      question: "Comment se construire une estime de soi ? ",
      answer: (
        <>
         On ne naît pas avec une estime en soi, on l’a construit. En fonction de l’environnement et de l’entourage de chacun, 
         cette estime se construit solidement pour les uns et faiblement pour d’autres. Mais, l’estime de soi débute avec soi-même. 
         Peu importe l’entourage auquel vous êtes soumis, si vous même n’avez pas une estime de soi importante, cela ne sert à rien. 
         Il est donc conseillé de pratiquer des activités positives pour le bien-être afin de booster cette estime. Il y  a par exemple : 
         {"\n\n"}   - des mots d’affirmations quotidiennes qui peuvent être écrites ou dites à l'oral devant un miroir de préférence : “je suis belle”, “je suis digne”, etc. 
         {"\n\n"}   - un sport permettant de passer un bon moment tout en se détendant: le pilate, la danse, etc.  
         l’art pour vous permettre d’exprimer vos doutes : la peinture, l’écriture, etc.
         {"\n\n"}   - une journée de soin, de détente où l’objectif est d’être focalisé sur soi-même
         {"\n\n"}   - des “célébrations”, rituels à soi-même pour chaque accomplissement : partir au restaurant, s’offrir un cadeau, etc. 
         {"\n\n"}   - un geste aimable envers un autre pour se remonter le mood
         {"\n\n"}Les options sont nombreuses mais l’essentiel est de se créer une routine qui répond à vos besoins mentaux, moraux et à votre bien-être. Il est important de noter que la construction de votre estime de soi est un processus qui se fait tout au long de la vie, il ne s’arrête jamais! 

         
         </> 
       ),
     },
    {
      id: 2,
      question: "Cette estime de soi doit-elle se faire au détriment des personnes qui m’entourent ? ",
      answer: (
        <>
         Absolument pas! Ce processus doit se faire sans rabaisser ou affecter une autre personne. La construction de cet abri, cette 
         ‘maison’ qui vous protège et vous apporte de la confiance doit se faire seule, sans perturber quiconque. 
         {"\n"}Dès lors où elle impacte négativement une autre personne, il y a un problème et vous devenez comme ceux qui projettent leurs complexes sur les autres pour se sentir un peu mieux. 
         {"\n"}Il est donc conseillé de pratiquer des activités positives pour le bien-être afin de booster cette estime. Il y  a par exemple : 
         {"\n\n"}Chaque personne doit ainsi construire son propre abri, booster son estime de soi sans impacter celle des autres!

         </> 
       ),
     },
    {
      id: 3,
      question: "Comment faire face aux critiques durant ce processus ?",
      answer: (
        <>
        Certes, cette fondation peut être affaiblie par des critiques, des regards mal placés ou pleins d’autres facteurs. 
        Mais, il est important de ne pas se laisser abattre par ces mauvaises énergies qui ont pour but de détruire vos efforts. 
        {"\n"}Plus l’abri, autrement dit la ‘safe place’ que vous construisez est menacée par les critiques, plus elle va se consolider. 
        À aucun moment il faut douter de soi ou penser que le travail accompli est vain. Là est la plus grande erreur. 
        {"\n\n"}Pour faire face aux critiques, il faut voir chacune de ses critiques comme une opportunité de consolider son travail et d’avancer. 
        Tout ceci sans oublier que ceux/celles qui critiquent sont généralement ceux/celles qui ont le moins confiance en eux. 
         
         {"\n\n"}Cela n'empêche cependant pas l'expérience désagréable, de se faire juger voire critiquer, mais avec une bonne confiance en soi et une bonne estime de soi, les regards des autres deviendront complètement insignifiants. 


         </> 
       ),
     },
    {
        id: 4,
        question: "Mes proches jouent-ils un rôle important dans ce processus? Comment savoir s’ils ont des bonnes intentions ? ",
        answer: (
         <>
        Bien qu’ils ne soient pas au centre de tout ce processus, les proches jouent un rôle assez important 
        puisqu'ils font partie de la vie quotidienne. Ces derniers peuvent être un facteur clé afin d’évoluer, 
        raison pour laquelle il est important de s’entourer de personnes qui ne vous tirent pas vers le bas mais au contraire, vous élèvent. 
        
        {"\n\n"}Les personnes jalouses de votre vie, votre bonheur, de vos accomplissements et qui sont uniquement présentes pendant les bons moments sont 
        à écarter de votre vie afin de construire l’environnement le plus sain possible. 

          </> 
        ),
      },
      {
        id: 5,
        question: "L’opinion de mes proches est-elle toujours bonne à prendre ?",
        answer: (
          <>
          Étant des êtres humains, les personnes de votre entourage ont tous des opinions. Il est normal de vouloir valoriser leur parole
          cependant même vos proches peuvent avoir des paroles blessantes et déplacées. C'est donc à vous en tant qu’individu de poser vos 
          limites afin de vous protéger. N’oubliez pas que dans ce processus c’est vous la priorité. 
           {"\n\n"}Un ‘non’ n’est pas un synonyme de cruauté, au contraire, c’est une marque de confiance en soi et d’une habilité 
           à reconnaître lorsque vous ne tolérez pas une situation qui risque de vous faire perdre en confiance. 
           </> 
         ),
       },
       {
        id: 6,
        question: "Que faut-il retenir à tout prix? ",
        answer: (
          <>
            Il est <Text style={{ fontWeight: 'bold' }}>capital</Text> de se rappeler que la priorité pour chaque personne est elle-même. 
            Faire passer une autre personne avant est l’une des plus grandes erreurs qu’un individu peut commettre puisqu’après avoir commis cette erreur, 
            cette personne deviendra dépendante de l’autre et sera prête à accepter tout et n’importe quoi. C’est à partir de ce moment-là que l’être humain 
            se perd lui-même et permet à tout le monde de franchir et/ou détruire les barrières qu’il s'était fixées au début. 
           {"\n\n"}Ainsi, il ne faut pas oublier que tout au long de votre vie, la priorité est vous-même. Bien que vos proches, votre famille soit importante, 
           il ne faut jamais s’oublier en chemin car à partir de cet instant, il n’y a plus rien pour vous guider et tracer la limite entre le bien et le mal. 
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

const AppWrapperEstime = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null; // Render nothing until font is loaded

  return <QuestionEstime />; // Render the main component after fonts are loaded
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
    alignSelf:"center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppWrapperEstime;
