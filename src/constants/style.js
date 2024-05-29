import { StyleSheet } from "react-native";
import { width, height } from "./dimensions";

const styles = StyleSheet.create({
  cabecalhoPostagem: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    marginLeft: width * 0.06,
    gap: 12,
  },
  icone: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 0,
  },
  autorPostagem: {
    color: "white",
    fontSize: 22,
  },
  textoPostagem: {
    color: "white",
    fontSize: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "#cfcd59",
    justifyContent: "space-between",
    padding: 20,
  },
  containerEmpty: {
    flex: 1,
    backgroundColor: "#282a36",
    justifyContent: "center",
    alignItems: "center",
  },
  containerEmoji: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 50,
  },
  textoEmoji: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
  },
  caixaTexto: {
    backgroundColor: "#2d0038",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
  },
  campoComentario: {
    color: "white",
    marginTop: 5,
    height: 80,
    padding: 10,
  },
  btnPostar: {
    backgroundColor: "#a80000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  card: {
    marginVertical: 10,
  },
});

export default styles;
