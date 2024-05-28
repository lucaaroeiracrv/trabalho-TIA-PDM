import { StyleSheet } from 'react-native';
import { width, height } from "./dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d0050',
    justifyContent: 'space-between',
    padding: 20,
  },
  containerEmoji: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 50,
  },
  textoEmoji: {
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  containerComentario: {
    alignItems: 'center',
  },
  caixaTexto: {
    backgroundColor: '#2d0038',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  usuario: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  campoComentario: {
    color: 'white',
    marginTop: 5,
    height: 80,
    padding: 10,
  },
  btnPostar: {
    backgroundColor: '#a80000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;