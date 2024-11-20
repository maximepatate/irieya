import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from "expo-font";

const QuestionsLimits = () => {
  // Sample question and answer data
  const qaItems = [
    {
      id: 1,
      question: "Est-ce que cette parité à toujours existé ? ",
      answer: (
        <>
          La parité des sexes n’a pas toujours été présente. En effet, les premières lois instaurant une égalité entre l’homme et la femme ne sont apparues 
          qu’à la fin du XXe siècle. Ceci a notamment été possible grâce au combat de plusieurs femmes comme Simone de Beauvoir, Simone Veil ou encore Olympe de Gouge, 
          qui ont été de véritables pionnières du féminisme et de la lutte pour l’égalité des sexes.
          
          {"\n\n"} Ce n’est qu’en 1975 que le divorce a été autorisé par consentement mutuel avec la loi n°75-617. 
          De plus, le 8 Mars 1982  est une journée très importante puisqu’elle à été la première journée mondiale du droit des femmes 
          et à permit à plus de femmes de voter aux élections municipales et de supprimer le statut de “chef de famille” pour l’homme.

        </>
      ),
    },

    {
      id: 2,
      question: "En 2024 , est-ce que cette égalité est totale ? ",
      answer: "Bien que la majorité des lois dans le monde disent que les sexes sont égaux, l’égalité n’est totale dans aucun pays. Un tiers des pays n’ont connu aucun progrès en la matière depuis 2015, et la situation des femmes s’est même dégradée dans 18 pays, à l’instar du Venezuela, de l’Afghanistan ou de l’Afrique du Sud. En effet, on remarque plusieurs différences dans plusieurs domaines. \n\n Dans le monde du travail, selon la SIGI, la proportion de participation des femmes sur le marché du travail en Côte d’Ivoire était de 51% en 2022 contre 81% pour les hommes. Même si cette proportion augmente au fil des années, on remarque qu'elle est beaucoup plus faible que celle des hommes. \n\n De même pour le taux d’employabilité des femmes, qui était de 46% en 2022 contre  77% pour les hommes. De plus, dans certains endroits du monde, comme l’Iran ou l’Afghanistan, la femme est toujours considérée comme sous l’emprise de l’homme. Ainsi, certaines femmes ont l’obligation de se couvrir entièrement le corps, ne peuvent pas sortir de chez elles sans un homme de leur famille, n’ont pas le droit d’aller à l’école, ou même de s’exprimer sans en avoir eu l’autorisation par un homme.",
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

const AppWrapperLimiteEgalite = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null; // Render nothing until font is loaded

  return <QuestionsLimits />; // Render the main component after fonts are loaded
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
    marginBottom: 20,
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

export default AppWrapperLimiteEgalite;
