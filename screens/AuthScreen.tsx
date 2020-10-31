import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { observer } from "mobx-react";
import NavigationStore from "../navigation/NavigationStore"
import NewAccount from "./NewAccountScreen"

function AuthScreen({navigation} : any) {
    return(
        <View style={styles.container} > 
                <Text style={styles.title}>AuthScreen</Text>
                <View style={styles.line} ></View>
                    <View style={styles.login}>
                        <TextInput style={styles.loginInput} placeholder={"Login"} 
                            onChangeText={ (text) => NavigationStore.setLogin(text) }
                        ></TextInput>
                    </View>
                    <View style={styles.password} >
                        <TextInput style={styles.passwordInput} placeholder={"Password"} 
                            onChangeText={ (text) => NavigationStore.setPassword(text) }
                        ></TextInput>
                    </View>
                    <Button title={"Go"} onPress={() => NavigationStore.goNav()} ></Button>
                    <Button title={"Create new account"}  ></Button>    
                </View>
    )
};

export default observer(AuthScreen);

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
    login: {
        justifyContent:"center",
        marginTop: 10,
        backgroundColor: "#eee",
        width: "70%",
        height: "7%",
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#808080",
    },
    loginInput: {
        paddingLeft: 15,
        fontSize: 20,
    },
    password: {
        justifyContent:"center",
        marginTop: 10,
        backgroundColor: "#eee",
        width: "70%",
        height: "7%",
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#808080",
    },
    passwordInput: {
        paddingLeft: 15,
        fontSize: 20,
    },
})