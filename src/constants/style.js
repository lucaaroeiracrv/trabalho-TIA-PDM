import { StyleSheet } from "react-native";
import { height, width } from "./dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  card: {
    marginBottom: 10,
  },
});

export default styles;