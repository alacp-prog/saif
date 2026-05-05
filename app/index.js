import {router} from "expo-router";
import {useContext, useState} from 'react';
import {Alert, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {myContext} from "./_layout";
import styles from "../styles";


export default function Login() {

    const [email, setEmail] = useState('miar');
    const [password, setPassword] = useState('miarpass');
    const [, setUser] = useContext(myContext)


    async function login(username, password) {

        return fetch('https://dummyjson.com/auth/login', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            credentials: 'include'

        })
    }




    const handleLogin = async () => {

        if (!email || !password) {

            Alert.alert('Error', 'Please enter email and password');

            return;
        }


        login(email, password)

            .then(response => {

                if (!response.ok) {
                    throw new Error('Login échoué');
                }
                return response.json();
            })
            .then(data => {setUser(data); router.replace("(tabs)/home")})
            .catch(error => console.error('Error:', error))

    };

    return (
      

            <View style={styles.container}>

                <Image source={require("../assets/images/login.png")} style={{width: 200, height: 200}} />

                <Text style={styles.title}>Login</Text>

                <View style={styles.form}>

                    <TextInput

                        style={styles.input}

                        placeholder="Email"

                        keyboardType="email-address"

                        value={email}

                        onChangeText={setEmail}

                    />



                    <TextInput

                        style={styles.input}

                        placeholder="Password"

                        secureTextEntry

                        value={password}

                        onChangeText={setPassword}

                    />

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>

                        <Text style={styles.buttonText}>Login</Text>

                    </TouchableOpacity>

                </View>
            </View>
        





    );

}
