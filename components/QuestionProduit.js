import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from "expo-font";

const QuestionProduit = () => {
  // Sample question and answer data
  const qaItems = [
    {
      id: 1,
      question: "Quel(s) produits utiliser pour l'hygiène intime ?",
      answer: "Aucun produit n’est obligatoirement nécessaire pour l’hygiène intime. Cela dépend et varie énormément d’une femme à une autre. \n\nCertaines préfèrent utiliser uniquement de l’eau pour se nettoyer tandis que d’autres préféreront utiliser un gel intime comme celui de la marque ‘Saforel’ ou ‘Intima’ par exemple. Rien n’est nécessairement recommandé mais pour celles utilisant des gels intimes, il n’est pas recommandé de l’utiliser quotidiennement ni en profondeur. \n\nLe vagin est autonettoyant donc il n’est pas nécessaire de le nettoyer avec du savon, il y a même un risque d’infection !",
    },
    {
      id: 2,
      question: "Qu’est-ce qu’on utilise lorsque l’on a ses règles ? ",
      answer: "Les serviettes hygiéniques, les tampons, la coupe menstruelle ou encore les culottes menstruelles.",
    },
    {
      id: 3,
      question: "À quelle fréquence est-ce qu’on utilise les différents produits ?",
      answer: "Aucune règle n’a été établie en termes de fréquence à laquelle les produits menstruels doivent être utilisés. En effet, chaque femme à un cycle menstruel différent et un flux différent.\n\nCependant il est conseillé de changer de serviette hygiénique chaque 4h pour un flux modéré et chaque 2h à 4h pour un flux important. Cependant cela varie en fonction du type de serviettes utilisées, il existe par exemple des serviettes de nuit qui permettent une durée qui excède les 4 heures d’emplois.\n\nDe même pour les tampons qui doivent être changés environ chaque 4h mais une fois de plus, tout dépend de l’abondance du flux qui varie d’une femme à une autre.\n\nQuant aux coupes menstruelles, aussi appelées “cup menstruelles”, le fonctionnement est un peu différent. Il existe différentes tailles de coupes menstruelles, allant des tailles 0 à 3. Ses tailles sont liées au flux; plus le flux est abondant, plus la taille sera élevée. Pour ce produit, il est recommandé de le changer chaque 6 heures puisque c’est en général au bout de ce temps là que le cup se remplit.\n\nQuant aux culottes menstruelles de bonne qualité, elles peuvent se porter sur toute une journée et la plupart du temps, il faut les changer le soir après la douche.   ", 
    },
    {
        id: 4,
        question: "Comment utilise-t-on les différents produits ?",
        answer: (
         <>
          <Text style={{ fontWeight: 'bold' }}>Les serviettes hygiéniques</Text>
          {"\n\n"} -Commencez par enlever la bande de papier qui protège la partie adhésive de la serviette.
          {"\n\n"}- Placez verticalement la partie adhésive de la serviette sur le milieu de la culotte.
          {"\n\n"}- Si la serviette utilisée à des ailettes, enlevez une fois de plus le papier qui protège la partie adhésive et rabattez ensuite les ailettes sous chaque côté de la culotte.
          {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Les tampons sans applicateur</Text>
          {"\n\n"}- Commencez par repérer l’entrée du vagin puisque c’est par cette ouverture que le tampon va passer.
          {"\n\n"}-Tenez ensuite le tampon par le bas du côté de la ficelle d’une main et écartez les lèvres avec l’autre main.
          {"\n\n"}- Placez le bout un peu arrondi du tampon au niveau de l’ouverture du vagin et poussez doucement le tampon à l’intérieur jusqu’à ce qu’il n’y est que la ficelle qui pendent.
          {"\n\n"}- Lorsque le tampon est bien inséré, aucune gêne ne devrait être ressentie.
          {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Les tampons avec applicateur</Text>
          {"\n\n"}- Commencez par repérer l’entrée du vagin puisque c’est par cette ouverture que le tampon va passer.
          {"\n\n"}- Tenez l’embout avec votre pouce et votre majeur en les plaçant sur les petits anneaux et vérifiez que la ficelle soit vers le bas.
          {"\n\n"}- Insérez le tube extérieur dans le vagin en l’inclinant et faites glisser entièrement l’applicateur dans le vagin.
          {"\n\n"}- Faites glisser le tube intérieur dans le tube extérieur jusqu’à ce que les deux extrémités se joignent. Ainsi, le tampon aura glissé en dehors de l’applicateur.
          {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Les tampons avec applicateur</Text>
          {"\n\n"}- Elles se mettent à peu près comme des tampons. La principale étape qui diffère est la première où dans le cas des coupes menstruelles, il faut commencer par plier le bout arrondi afin de le rendre plus petit.
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

const AppWrapperProduit = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Nunito': require("../assets/fonts/NunitoRegular.ttf"),
      "Nunito-Bold": require("../assets/fonts/NunitoBold.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null; // Render nothing until font is loaded

  return <QuestionProduit/>; // Render the main component after fonts are loaded
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

export default AppWrapperProduit;
