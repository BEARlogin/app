import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import { InputUserInfo } from '../components/InputUserInfo';

export default function AuthScreen() {

    return(
        <View style={styles.container} > 
                <Text style={styles.title}>AuthScreen</Text>
                <View style={styles.line} ></View>
                <InputUserInfo />
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
    },
    line: {
        backgroundColor: "#808080",
        marginVertical: 20,
        height: 1,
        width: "60%",
    },
})