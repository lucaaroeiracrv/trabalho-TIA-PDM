import { StyleSheet } from "react-native";
import { width, height } from "./dimensions";

const styles = StyleSheet.create({
  containerEmoji: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#280343",
  },
  emoji: {
    fontSize: 50,
  },
  textoEmoji: {
    marginTop: 10,
    fontSize: 18,
    color: "whitesmoke",
  },
  fundoCor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#280343",
  },
  card: {
    marginVertical: 10,
    backgroundColor: "#210b35",
    elevation: 4,
    color: "whitesmoke",
  },
  cabecalhoPostagem: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    marginLeft: width * 0.04,
    gap: 12,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 0,
  },
  textoPostagem: {
    color: "whitesmoke",
    fontSize: 20,
  },
  caixaTexto: {
    backgroundColor: "#1b1027",
    padding: 20,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    marginTop: 20,
    height: height * 0.28,
  },
  campoComentario: {
    color: "whitesmoke",
    height: 80,
    padding: 10,
    marginVertical: 15,
    fontSize: 20,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 12,
  },
  usuario: {
    color: "whitesmoke",
    fontSize: 24,
  },

  btnEnviar: {
    backgroundColor: "#99272d",
    color: "whitesmoke",
    borderRadius: 25,
    width: 300,
    alignSelf: "center",
  },
});

export default styles;
