import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";


const QuestionActu = () => {
  // Sample question and answer data
  const qaItems = [
    {
      id: 1,
      question: "Quelles mesures ont été mises en place pour aboutir à une égalité totale ?",
      answer: "Chaque 8 mars, à l’occasion de la journée internationale du droit de la femme, un bilan de la situation des femmes est fait et de nouvelles propositions voient le jour afin d’aboutir vers une égalité parfaite. Cependant, cela reste un challenge car les conflits internationaux comme les guerres et épidémies retardent le processus en rendant les conditions de vie des femmes encore plus compliquées.\n\n En 2016, il y a eu l’inscription du principe de l’égalité entre les hommes et les femmes dans la Constitution de 2016 et sa déclinaison dans divers domaines (parité sur le marché de l’emploi, participation politique et lutte contre les violences faites contre les femmes). \nEn 2016, il y a eu l’inscription du principe de l’égalité entre les hommes et les femmes dans la Constitution de 2016 et sa déclinaison dans divers domaines (parité sur le marché de l’emploi, participation politique et lutte contre les violences faites contre les femmes). \n\n Le nouveau Plan Stratégique (PS) 2022-2025 du PNUD vise à soutenir les pays à mettre fin à l’extrême pauvreté, à réduire les inégalités et à atteindre les Objectifs de Développement Durable (ODD) à l’horizon 2030. La solution 6 appelée “égalité des sexes” à pour but d’inclure davantage les femmes en leur donnant les moyens pour pourvoir participer à la vie économique, sociale, et politique autant que les hommes.",
    },
    {
      id: 2,
      question: "Est-ce que le combat pour une égalité totale entre l’homme et la femme est vain? ",
      answer: (
        <>
          Aujourd’hui, on ne peut pas dire que le combat pour une égalité totale entre l’homme et la femme est vain. 
          Bien qu’il est évident que parvenir à une égalité totale sera plus que compliqué, il ne faut pas oublier le chemin qui a été 
          parcouru depuis plusieurs années grâce aux différentes pionnières du féminisme. D’une inégalité très tranchée où les femmes étaient 
          complètement dépendantes des hommes et n’étaient valorisées sur aucun plan, nous sommes aujourd’hui à un stade où elles occupent des places 
          importantes dans plusieurs sociétés. 
          
          {"\n\n"}Cependant, comme il a été précédemment mentionné, dans certains pays les femmes sont toujours privées de toute liberté. 
          Ainsi, afin de parvenir à une égalité totale, il est important de commencer par rétablir la situation dans ses pays où l’égalité est inexistante. 
          Ensuite, il faudrait réussir à sensibiliser les populations et faire comprendre à tous que l’inégalité entre l’homme et la femme n’avait jamais lieu d’être.

          {"\n\n"}C’est donc un combat compliqué que les femmes doivent continuer de mener mais au fil du temps, une égalité totale pourrait s’installer sur du long terme. 
        </>
      ),
    },
    {
      id: 3,
      question: "Quelques ressources pour en savoir plus sur ce combat qui dure depuis bien longtemps.",
      answer:  (
        <>
          → Discours d'une auteure féministe nigériane, Chimamanda Ngozi Adichie,{"\n"} « Nous devrions tous être féministes » 
          {"\n"}We should all be feminists | Chimamanda Ngozi Adichie | TEDxEuston 
          
          {"\n\n"}→ Film de Sarah Gavron, Suffragette (2015)

          {"\n\n"}→ Livre <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold'  }}>La déclaration des droits de la femmes et de la citoyenne</Text>, Olympe de Gouges, 

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

const AppWrapperHygiene = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null; // Render nothing until font is loaded

  return <QuestionAnswerExample />; // Render the main component after fonts are loaded
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
    borderRadius: 20,
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

export default QuestionActu;
