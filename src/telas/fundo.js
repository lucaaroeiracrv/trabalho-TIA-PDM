import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TextInput, Button, Alert } from 'react-native';
import { Provider as PaperProvider, Appbar, Card, Paragraph } from 'react-native-paper';
import testeToxidade from './testeToxidade'; // Importando a função de validação de toxicidade

export default function App() {
  const [textoTweet, setTextoTweet] = useState('');
  const [tweets, setTweets] = useState([]);

  const criarTweet = async () => {
    if (textoTweet.trim() !== '') {
      try {
        // Validando se o texto do tweet é tóxico
        const results = await testeToxidade(textoTweet);
        const isToxic = results.some(result => result.results[0].match);

        if (isToxic) {
          Alert.alert('Tweet não enviado', 'O tweet nao segue as diretrizes da comunidade');
          return; // Não envia o tweet se for tóxico
        }

        // Se o texto não for tóxico, envia o tweet
        const newTweet = {
          id: Date.now(),
          author: "User",
          content: textoTweet.trim(),
        };

        setTweets(tweetsAnteriores => [...tweetsAnteriores, newTweet]);
        setTextoTweet('');
      } catch (error) {
        console.error("Erro ao validar toxicidade:", error);
        Alert.alert('Erro', 'Ocorreu um erro ao validar a toxicidade do texto do tweet.');
      }
    }
  };

  return (
    <PaperProvider>
      <View style={[styles.container, { backgroundColor: tweets.length === 0 ? '#282a36' : '#cfcd59' }]}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu tweet"
          value={textoTweet}
          onChangeText={text => setTextoTweet(text)}
        />
        <Button title="Enviar" onPress={criarTweet} />  
        <FlatList
          data={tweets}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Paragraph>{item.content}</Paragraph>
              </Card.Content>
            </Card>
          )}
        //   keyExtractor={item => item.id.toString()}
        />
      </View>
    </PaperProvider>
  );
}

