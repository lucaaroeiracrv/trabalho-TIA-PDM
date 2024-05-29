import React from "react";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
// import * as Dimensions from "../../constants/dimensions";
import styles from "../../constants/style";

export default function Postagem(props) {
    return (
        <View>
            <View style={styles.userInfo}>
                <Image source={props.icon} style={styles.icon}/>
                <Text style={styles.usuario}>{props.autorPostagem}</Text>
            </View>
            <Text style={styles.textoPostagem}>{props.textoPostagem}</Text>
        </View>
    );
};