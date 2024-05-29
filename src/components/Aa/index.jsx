import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
// import * as Dimensions from "../../constants/dimensions";
import styles from "../../constants/style";

export default function Postagem(props) {
    return (
        <View>
            //cabecalhoPostagem
            <View style={styles.cabecalhoPostagem}>
                <Image source={props.icone} style={styles.icone}/>
                <Text style={styles.autorPostagem}>{props.autorPostagem}</Text>
            </View>
            //conteudoPostagem
            <Text style={styles.textoPostagem}>{props.textoPostagem}</Text>
        </View>
    );
};