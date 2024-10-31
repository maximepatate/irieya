import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuestionConf = () => {
  // Sample question and answer data
  const qaItems = [
    {
        id: 1,
        question: "Comment ne pas se soucier de l’opinion des autres ?",
        answer: (
          <>
            Il faut savoir que l’être humain est un être naturellement centré sur lui-même et a tendance à projeter ses 
            insécurités sur les autres afin de ne pas se sentir seul dans son mal-être. Ces personnes vont alors critiquer 
            et dénigrer le physique d’autrui pour leur créer des complexes. 
            {"\n\n"}
            <Text style={{ fontWeight: 'bold' }}>Afin de surmonter les critiques et les remarques, il faut donc commencer par réaliser que les 
             personnes complexées projettent en fait leurs complexes sur les autres afin de se sentir 
             mieux dans leur corps. 
             {"\n"}Par exemple, une personne qui fait des remarques sur le poids d’une 
             autre est probablement déjà complexée par son propre poids. 
             {"\n"}C’est pourquoi il est important d’ignorer les commentaires des autres, 
             car ceux qui sont complexés de nature tentent de booster leur estime en rabaissant les autres bien que ceci ne soit qu’une façade et ne 
             fonctionne pas.</Text>
             {"\n\n"}
             Ainsi lorsqu’une personne vous fait des remarques négatives concernant votre physique, il est important de se rappeler que cette personne 
             souffre elle-même intérieurement. Écouter ses commentaires ne sert donc à rien à part se créer un mal-être qui n’a pas lieu d’être.
             {"\n\n"}
             Il est également important d’être ouvert à de nouvelles expériences qui vous poussent à voir le monde au-delà de l'opinion des autres. 
             {"\n"}Faites abstraction de ses voix extérieures remplies de critiques et focalisez-vous sur vous-même. Avec le temps, ce silence vous permettra de solidifier 
             votre estime en soi.  

          </>
        ),
      },
      {
        id: 2,
        question: "Comment savoir si une opinion vient d’une bonne intention ou non ? ",
        answer: (
          <>
            Il est important de pouvoir tracer une limite entre ce que vous même, en tant qu’être humain pouvez tolérer ou non. 
            Seul vous pourrez savoir si une opinion est bonne ou mauvaise. Pour cela, il faut se poser les questions suivantes:  
            {"\n\n"}
            “Quelles sont mes limites ? Qu’est-ce que je peux accepter ? Est-ce que je pourrai dire cela à une autre personne sans me sentir mal ? 
            {"\n"}Est-ce que son commentaire avait pour but de me donner des conseils ou juste de me dénigrer ?”   
             {"\n\n"}
             Toutes ses questions sont nécessaires pour tracer la limite entre le bon et le mauvais. 
             {"\n\n"}
             Par exemple, une personne qui vient vous dire : “T’es devenu aussi grosse qu’une baleine”, il est évident que cette dernière 
             n’a pas de bonne intention et n’a qu’un seul but, vous dénigrer. {"\n"}Or, une personne qui vous approche en disant “Tu as pris du poids 
             soudainement. Est-ce que tout va bien? Je m’inquiète pour ta santé.” {"\n"}et bien cette dernière ne peut qu’avoir de bonnes intentions et cela se 
             remarque rien que part la formulation. {"\n"}Ainsi, l’expression et la manière d’approcher une personne changent tout. 


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
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuestionConf;
