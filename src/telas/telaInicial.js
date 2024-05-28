import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import styles from './components/styles'
import PostsScreen from './Listagem'; 

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {

  const [comentario, setComentario] = useState('');
  const [posts, setPosts] = useState([]);

   const tratarPost = () => {
    if (comentario) {
      console.log(comentario)
      setPosts([...posts, comentario]);
      setComentario('');
    } else {
      alert("Nada digitado")
    }
   }

  return (
    <View style={styles.container}>
      <View style={styles.containerEmoji}>
        <Text style={styles.emoji}>😢</Text>
        <Text style={styles.textoEmoji}>Nada aqui ainda</Text>
      </View>
      <View style={styles.containerComentario}> 
        <View style={styles.caixaTexto}>
          <Text style={styles.usuario}>@bagre</Text>
          <TextInput style={styles.campoComentario} value={comentario}
          onChangeText={setComentario} 
          placeholder='Faça seu post' > 
          </TextInput>
          <Button
          style={styles.btnPostar}
          onPress={tratarPost}
          title="Press Me"
          > 
          </Button>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Posts" component={PostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;