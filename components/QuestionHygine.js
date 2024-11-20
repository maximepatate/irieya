import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from "expo-font";

const QuestionAnswerExample = () => {
  // Sample question and answer data
  const qaItems = [
    {
      id: 1,
      question: "De quoi/Comment est constitué l’intimité d’une femme? ",
      answer: "L’intimité de la femme est constituée de plusieurs parties distinctes comme on peut le voir sur les images ci-dessous : ",
      image: require('../assets/anatomie.png'),
    },
    {
      id: 2,
      question: "Quelle est la différence entre le vagin et la vulve ?",
      answer: "La grande majorité des personnes confondent le vagin et la vulve et utilisent le terme “vagin” pour définir toute l’intimité de la femme. Or, les organes génitaux de la femme se classent en deux catégories : la vagin et la vulve.\n\nLe vagin est l’une des parties internes de l’appareil génital féminin qui s’ouvre au niveau de la vulve et des petites lèvres. Ce dernier communique avec l’utérus via le col de l’utérus qui est l’organe qui accueille la grossesse.\n\nLa vulve, elle,  correspond à la partie externe de toute cette partie intime et contient bien plus d’éléments que le vagin. On dit souvent d’ailleurs que la vulve est un autre nom pour les organes génitaux féminins puisque ces derniers font références aux organes sexuels internes. \nÀ première vue, la vulve sert juste de “protection” aux organes reproducteurs internes afin de les protéger d’infections, de blessures, etc. Cependant, elle a plusieurs autres fonctionnalités. \nElle permet notamment aux femmes d’avoir leurs règles, d’uriner, d’accoucher et de ressentir du plaisir sexuel. Toutes ses différentes fonctions sont réalisables grâce aux divers organes génitaux qui constituent la vulve. Grâce à ces derniers, on dit que la vulve est une zone érogène, c’est-à-dire une zone qui est stimulée sexuellement lorsqu’elle est touchée."
    },
    {
      id: 3,
      question: "Quels sont les organes génitaux (organes sexuels externes) qui constituent la vulve? \n Quelles sont leurs fonctions respectives ? ",
      answer: (
        <>
         <Text style={{ fontWeight: 'bold' }}>Le mont Vénus </Text>
         {"\n\n"} ⇒ Cette appellation assez sophistiquée doit son nom à la déesse Vénus, déesse de l’amour et de la séduction. 
         Cette partie est la surface la plus apparente chez l’intimité de la femme, en forme de V ou de poire comme certains aiment bien le dire. 
         C’est également la partie du corps où des poils pubiens poussent à partir de la puberté.
         {"\n\n"} ⇒ Le mont Vénus sert d’amortisseur lors d’une pénétration et peut également chez certaines femmes provoquer des sensations agréables de part la stimulation des tissus sensibles.
         Les grandes lèvres (lèvres extérieures),

         {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Les grandes lèvres (lèvres extérieures)</Text>
         {"\n\n"} ⇒ Ses lèvres verticales sont des espèces de plis entourant les parties les plus profondes de la vulve comme les petites lèvres par exemple. 
         Ses dernières contiennent des tissus érectiles qui se remplissent de sang lors de l’excitation. 

         {"\n\n"}<Text style={{ fontWeight: 'bold' }}>Les petites lèvres (lèvres intérieures)</Text>
         {"\n\n"}⇒ Elles correspondent à une partie verticale, sans poils dans l’intimité de la femme, situées à l’intérieurs des lèvres externes. 
         Ces lèvres varient énormément d’une femme à une autre et peuvent se présenter sous plusieurs formes. Par exemple, chez certaines femmes elles sont 
         symétriques et/ou repliées à l’intérieur des grandes lèvres tandis que chez d’autres, elles sont asymétriques et/ou ressortent. 
         {"\n\n"}⇒ Les petites lèvres sont notamment présentes pour abriter et protéger le clitoris qui est lui très sensible. 

         {"\n\n"}<Text style={{ fontWeight: 'bold' }}> Le clitoris</Text>
         {"\n\n"} ⇒ Selon une étude, le clitoris contient plus de 10 000 terminaisons nerveuses et est la partie la plus sensible de la vulve. 
         Mais, ce dernier est tout de même le centre du plaisir chez l’anatomie reproductive de la femme; il est capable de produire les réponses 
         sexuelles les plus intenses et les plus agréables de votre corps. En effet, la plupart du temps, c’est à travers une stimulation du clitoris, 
         directe ou indirecte, que la femme atteint l’excitation sexuelle voire l’orgasme. Cependant, étant une zone très sensible, une pression trop forte 
         peut être douloureuse chez certaines femmes. 
         {"\n\n"} ⇒ Bien que la majorité des personnes le pense, le clitoris n’est pas juste le bout de chair situé au sommet de la vulve mais il 
         est plus complexe que ça. Ce dernier est constitué d’un réseau complexe de tissus érectiles et de nerfs. 

         {"\n\n"}<Text style={{ fontWeight: 'bold' }}> L'ouverture de l’urètre </Text>
         {"\n\n"}  ⇒ Cette ouverture se trouve juste en dessous du clitoris et correspond à la partie du corps de la femme où 
         l’urine sort puisque l’urètre correspond au tube qui transporte l’urine depuis la vessie.


         </> 
       ),
     },
    {
        id: 4,
        question: "Comment maintenir une bonne hygiène corporelle ?",
        answer: "Maintenir une bonne hygiène corporelle n’est pas difficile, il suffit juste d’avoir une bonne routine adaptée à soi-même.\n\n La plupart du temps, il est recommandé de prendre une douche deux fois par jour, une le matin et une le soir. Utiliser des déodorants est utile pour neutraliser les mauvaises odeurs et en cas de transpiration, il est important de nettoyer avec une serviette propre avant de remettre du déodorant.\n\n Pour finir le tout, utilisez une brume pour le corps, des parfums pour avoir votre propre odeur !",
      },
      {
        id: 5,
        question: "Comment maintenir une bonne hygiène intime ?",
        answer: "Pour maintenir une bonne hygiène intime, quelques astuces existent.\n\n Il est par exemple fortement recommandé de porter des culottes en coton, bien sèches afin d’éviter les vers de cayors ! Pour les femmes ayant des pertes abondantes, il est recommandé de changer de culotte ou de se nettoyer si elles deviennent trop abondantes.\n\n Lorsque vous êtes dans des espaces publics, il est conseillé de toujours avoir des lingettes pour nettoyer les toilettes et si possible, ne vous asseyez pas directement sur les toilettes mais accroupissez-vous ! \n\nToutes ses astuces contribuent évidemment à une bonne hygiène intime mais il est important de savoir que le moins de produits chimiques sont utilisés, le mieux c’est ! ",
      },
      {
        id: 6,
        question: "Est-ce différent lorsque l’on a ses règles ? ",
        answer: "Cette hygiène quotidienne ne change pas nécessairement lorsqu’une femme a ses règles. Le seul changement est l’utilisation des produits menstruels.  ",
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
            <>
            <Text style={styles.answer}>{item.answer}</Text>
            {item.id === 1 && item.image && (
              <Image source={item.image} style={styles.image} />
            )}
          </>

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
    marginBottom: 20,
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
    marginBottom: 20,
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
  image: {
    width: 330, // Adjust the size as needed
    height: 330,
    marginTop: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default AppWrapperHygiene;
