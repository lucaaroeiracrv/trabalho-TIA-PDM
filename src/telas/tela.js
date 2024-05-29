import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
  Text,
  Image,
} from "react-native";
import { Provider as PaperProvider, Card, Paragraph } from "react-native-paper";
import usuario from "../../assets/usuario.png";
import testeToxidade from "../safeText/toxicity"; // Corrigir caminho da importação
import styles from "../constants/style"; // Importar estilos

export default function Tela() {
  const [textoTweet, setTextoTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const criarTweet = async () => {
    if (textoTweet.trim() !== "") {
      try {
        const results = await testeToxidade(textoTweet);
        const isToxic = results.some((result) => result.results[0].match);

        if (isToxic) {
          Alert.alert(
            "Tweet não enviado",
            "O tweet nao segue as diretrizes da comunidade"
          );
          return;
        }

        const newTweet = {
          icone: usuario,
          autorPostagem: "User",
          textoPostagem: textoTweet.trim(),
        };

        setTweets((tweetsAnteriores) => [...tweetsAnteriores, newTweet]);
        setTextoTweet("");
      } catch (error) {
        console.error("Erro ao validar toxicidade:", error);
        Alert.alert(
          "Erro",
          "Ocorreu um erro ao validar a toxicidade do texto do tweet."
        );
      }
    }
  };

  return (
    <PaperProvider>
      <View
        style={tweets.length === 0 ? styles.containerEmpty : styles.container}
      >
        {tweets.length === 0 ? (
          <View style={styles.containerEmoji}>
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.textoEmoji}>Nada aqui ainda</Text>
          </View>
        ) : (
          <FlatList
            data={tweets}
            renderItem={({ item }) => (
              <Card style={styles.card}>
                <Card.Content>
                  <View style={styles.cabecalhoPostagem}>
                    <Image source={item.icone} style={styles.icone} />
                    <Text style={styles.autorPostagem}>
                      {item.autorPostagem}
                    </Text>
                  </View>
                  <Paragraph style={styles.textoPostagem}>
                    {item.textoPostagem}
                  </Paragraph>
                </Card.Content>
              </Card>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <View style={styles.caixaTexto}>
          <TextInput
            style={styles.campoComentario}
            placeholder="Digite seu tweet"
            placeholderTextColor="#777"
            value={textoTweet}
            onChangeText={(text) => setTextoTweet(text)}
          />
          <Button title="Enviar" onPress={criarTweet} color="#a80000" />
        </View>
      </View>
    </PaperProvider>
  );
}
