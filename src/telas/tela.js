import React, { useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  Alert,
  Text,
  Image,
  // Card,
} from "react-native";
import {
  Provider as PaperProvider,
  Card,
  Paragraph,
  Button,
} from "react-native-paper";
import imagemMuitoPequena from "../../assets/usuario.png";
import usuario from "../../assets/user.png";
import styles from "../constants/style";
import testeToxidade from "../safeText/toxicity";

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
          icon: usuario,
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
        style={{
          flex: 1,
          backgroundColor: "#280343",
        }}
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
                  <View style={styles.userInfo}>
                    <Image source={item.icon} style={styles.profileImage} />
                    <Text style={styles.usuario}>{item.autorPostagem}</Text>
                  </View>
                  <Paragraph style={styles.textoPostagem}>
                    {item.textoPostagem}
                  </Paragraph>
                </Card.Content>
              </Card>
            )}
            // keyExtractor={(item, index) => index.toString()}
          />
        )}
        <View style={styles.caixaTexto}>
          <View style={styles.userInfo}>
            <Image source={usuario} style={styles.profileImage} />
            <Text style={styles.usuario}>@User</Text>
          </View>
          <TextInput
            style={styles.campoComentario}
            placeholder="Digite seu tweet"
            placeholderTextColor="#777"
            value={textoTweet}
            onChangeText={(text) => setTextoTweet(text)}
          />
          <Button onPress={criarTweet} style={styles.btnEnviar}>
            Enviar
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}
