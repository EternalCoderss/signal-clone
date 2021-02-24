import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { useState } from 'react';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {

    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                url:"https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/internetcitizen/files/2018/08/signal-logo.png"
            }}
            style={{ width: 200, height: 200 }}
            />
            <View style = {styles.inputContainer}>
                <Input 
                placeholder="Email" 
                autoFocus 
                type="email" 
                value={ email } 
                onChangeText={text => 
                setEmail(text)} />

                <Input 
                placeholder="Password" 
                secureTextEntry 
                type="password" 
                value={ password }
                onChangeText={text => 
                    setPassword(text)}/>
            </View>
            <Button containerStyle= { styles.button } onPress={signIn} title="Login" />
            <Button containerStyle= { styles.button } type="outline" title="Register" />
        </View>
    )
}
export default LoginScreen

const styles = StyleSheet.create({

    inputContainer: {},
    button: {},
})
