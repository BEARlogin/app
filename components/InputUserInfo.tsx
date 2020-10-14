import React, {useState, useEffect} from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';

export const InputUserInfo = () => {
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container} >
            <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword}  ></TextInput>
               
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "7%",
        width: "70%",
        borderWidth: 3,
        borderRadius: 30,
        borderColor: "#fff",
        backgroundColor: "#eee"
    },
    input: {
        height: "90%",
        width: "90%",
    },
})