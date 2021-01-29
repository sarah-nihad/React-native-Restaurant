
import React from 'react';
import Component from '@reactions/component';
import {
    StyleSheet, Text, View, TextInput, Image, ScrollView,
    RefreshControl, SafeAreaView, Alert,
    Modal,
    TouchableHighlight,

} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import { Icon } from 'react-native-elements'
import Context from '../../assets/js/context';
// import Icon from 'react-native-ionicons'
import Host from '../../assets/js/host';
import axios from 'axios';
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            errors: false,
            visible: false,
            profile: [],
            counter: 1,
            price:'',
            description:''
        };
    }

    

componentDidMount(){
    this.setState({price:this.props.route.params.price,counter: 1})
    
}


add(){
    var a=this.state.price
    var b =this.props.route.params.price
    var x=Number(a)+Number(b)
    this.state.counter++
    this.setState({ counter: this.state.counter++,price:x })
}

min(){
    if (this.state.counter > 1) {
        this.state.counter--
        var a=this.state.price
        var b =this.props.route.params.price
        var x=Number(a)-Number(b)
        this.setState({ counter: this.state.counter--,price:x })
    }   
}

addToCart(ctx){
   
    axios({
      url: Host+`api/v1/cart/add`,
      method: "POST",
      data: {
        "name": this.props.route.params.name, 
        "price": this.props.route.params.price,
        "img": this.props.route.params.img,
        "menu_id": this.props.route.params.id,
        "total": this.state.price,
        "count":this.state.counter,
        "description":this.state.description
      },

    })
      .then(response => {
        console.log(response.data);
        ctx.action.getCart()
        setTimeout(() => {
            this.props.navigation.goBack()  
        }, 200);
        
      })
      .catch(function (message) {
      });
}  


    render() {
      
        const { img, name, price } = this.props.route.params;
        return (

            <Context.Consumer>
                {ctx => {
                    return (





                        <View style={{ width: '100%', display: 'flex', height: '100%', zIndex: 2 }} >
                            <View style={{ width: '100%', height: 300 }} >
                                <View style={s.iconDiv}>
                                    <Icon name='close' color='#fff' size={35} onPress={() => {
                                        this.props.navigation.goBack()
                                    }} />
                                </View>
                                <Image source={{ uri: Host + img }} alt="img" style={{ width: '100%', height: 300 }} />
                            </View>
                            <View style={s.rowModProfTitle}>
                                <View style={s.ModProfTitle} >
                                    <Text style={s.textMod} >{name}   </Text>

                                </View>
                            </View>
                            <View style={s.desmain} >
                                <Text style={{ fontSize: 20 }} >
                                    Description
                                                  </Text>
                            </View>
                            <View style={s.mainDivInput} >
                                <TextInput style={s.input} placeholder='Enter Note For Item'
                                 onChangeText={(text) => this.setState({ description: text })}
                                 value={this.state.description}/>
                            </View>
                            <View style={s.mainCount} >
                                <Text style={s.count} onPress={() => {
                                   this.min()                                
                                }} > - </Text>
                                <Text style={s.num}  > {this.state.counter} </Text>
                                <Text style={s.count} onPress={() => {
                                    this.add()
                                }} > + </Text>
                            </View>

                            <View style={s.cartMain} onTouchStart={()=>{
                                this.addToCart(ctx)
                            }} >
                                <Text style={{ color: '#fff',fontSize:18,fontWeight:'bold' }} >
                                    Add To Cart
                                        </Text>
                                <Text style={{ color: '#fff',fontSize:18,fontWeight:'bold' }} >
                                    IQD {this.state.price}
                                        </Text>
                            </View>

                        </View>






                    )
                }}
            </Context.Consumer>
        )
    }
}
const s = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#bfe3ea73',
        color: 'black',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },


    iconDiv: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.11)',
        width: '100%',
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        // backgroundColor: '#fff',
        padding: 10,
        zIndex: 10,
        color: '#fff',
        shadowColor: 'black',
        shadowRadius: 20,
        shadowOpacity: 1,
    },
    mainDivInput: {
        width: '100%',
        marginTop: 50,
        marginBottom: 20,
        // height: '100%',
        display: 'flex',
        flexDirection: 'row',
        // height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 15
    },
    input: {
        width: '80%',
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        color: '#000',
        borderRadius: 5,
        // marginLeft: 15,
        padding: 10
    },
    ModProfTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '100%',
        backgroundColor: '#eee',
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
        // position:'absolute',
        // top:200
    },
    textMod: {
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
        textAlign: 'center'

    },
    rowModProfTitle: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        position: 'absolute',
        top: 260
    },
    desmain: {
        marginTop: 30,
        marginLeft: 10,
        width: '95%',
        borderBottomColor: '#777',
        borderBottomWidth: 1,
        padding: 10

    },
    mainCount: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    count: {
        borderColor: '#f4511e',
        borderWidth: 3,
        borderRadius: 300,
        height: 35,
        width: 35,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#f4511e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        margin: 10
    },
    num: {
        fontWeight: 'bold',
        fontSize: 20
    },
    cartMain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        height: 60,
        marginLeft: 15,
        width: '90%',
        backgroundColor: '#08b4df',
        borderRadius: 10,
        marginTop: 50,
        color: '#fff'
    }

});
export default MenuItem;
