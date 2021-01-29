// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, toast } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Icon } from 'react-native-elements';
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
    mainDiv:{
display:'flex',
alignItems:'center',
flexDirection:'row',
justifyContent:'space-around',
marginTop:40,
width:'85%'
    },
   
    img: {
        height: 200,
        width:200,
        marginBottom:55,
        marginTop:70

    }
});

class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: "",
            password: "",
            errors: false,
        };
    }
 
   
    render() {

        return (
            <Context.Consumer>

                {ctx => {
                    return (
                        <View style={styles.container}>

                            

                            <Image source={require("../assets/img/cont.png")} alt="img" style={styles.img} />
                            {/* <Text style={styles.title} >  Ticket System </Text> */}
                         
<View style={styles.mainDiv} >
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
        <Text><Icon color='#777' name="mail" size={40} /></Text>
<Text style={{fontSize:22,color:'#f4511e'}}  >Mail</Text>
    </View>
    <View style={{borderRightWidth:2,borderRightColor:'#777',height:40}}  />
    <View style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
    <Text><Icon color='#777' name="phone" size={40} /></Text>
<Text style={{fontSize:22,color:'#f4511e'}}  >Call Now</Text>
    </View>
</View>

                        </View>
                    )
                }}
            </Context.Consumer>
        );
    }
}
export default Help;

