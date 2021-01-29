// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, toast } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Context from '../assets/js/context';
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#bfe3ea73',
        color: 'black',
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",

    },
    input: {
        borderColor: '#ababab',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '80%',
        height: 45,
        borderStyle: "solid",
        backgroundColor: '#fff',
        color: 'black'
    },
    login: {
        borderColor: '#ababab',
        borderWidth: 1,
        borderRadius: 55,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '60%',
        height: 45,
        borderStyle: "solid",
        backgroundColor: '#f4511e',
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        marginTop:30
    },
    title: {
        color: '#707070',
        fontSize: 22,
        lineHeight: 40,
        fontWeight: "bold",
        marginBottom: 50,
    },
    img: {
        height: 100,
        width:100,
        marginBottom:55,
        marginTop:70

    }
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: "",
            password: "",
            errors: false,
        };
    }
    // savv = async () => {
    //     try {
    //         let token = await AsyncStorage.getItem('token')
    //         alert(token)
    //         console.log(token);
    //     } catch (e) {
    //         alert('Failed to clear the async storage.')
    //     }
    // }


componentDidMount(){
    console.log('ffffffff');
}






    Loginddd() {

        console.log('ssss');

        axios({
            url: `http://iraq-gis.com:3001/login`,
            method: "POST",
            data: {
                username: this.state.username,
                password: this.state.password,
                device_type: "web"
            }
        })
            .then(response => {
                console.log('ffff', response.data);
                alert('tttt')
                // let token = response.data.data.token
                // AsyncStorage.setItem('token', token)
                // if (response.data.status === true) {
                //     this.props.navigation.navigate('Home')

                // }
            })
            .catch(err => {
            });
    }

    render() {

        return (
            <Context.Consumer>

                {ctx => {
                    return (
                        <View style={styles.container}>

                            

                            <Image source={require("../assets/img/user.png")} alt="img" style={styles.img} />
                            {/* <Text style={styles.title} >  Ticket System </Text> */}
                            <TextInput placeholder="Username" style={styles.input}
                                onChangeText={(text) => this.setState({ username: text })}
                                value={this.state.username}
                            />
                            <TextInput placeholder="Passowrd" textContentType="password" style={styles.input}
                                onChangeText={(text) => this.setState({ password: text })}
                                value={this.state.password} />
                            {/* <Button on onPress={() => { this.savv() }} title="ssss" /> */}
                            <Text
                                style={styles.login}
                            >Login</Text>


                        </View>
                    )
                }}
            </Context.Consumer>
        );
    }
}
export default Login;

