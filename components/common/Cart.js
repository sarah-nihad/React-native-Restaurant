// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, toast } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Icon } from 'react-native-elements';
import Context from '../../assets/js/context';
import Host from '../../assets/js/host';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



order(ctx){
    console.log(ctx); 
    axios({
        url: Host + `api/v1/order/add`,
        method: "POST",
        data: {
            "cart": ctx.value.cart,
            "total":ctx.value.summed+5,
            "delivery":5

        },
    })
        .then(response => {
            console.log(response.data);
            ctx.action.getCart()


        })
        .catch(function (message) {
        });
}




    deleteItem(data) {
        console.log(data[0], data[1]);
        axios({
            url: Host + `api/v1/cart/delete`,
            method: "POST",
            data: {
                "id": data[0],

            },
        })
            .then(response => {
                console.log(response.data);
                data[1].action.getCart()


            })
            .catch(function (message) {
            });
    }

    render() {

        return (
            <Context.Consumer>

                {ctx => {
                    return (
                        <View style={styles.container}>
{ctx.value.cart.length===0?(
    <View style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}} > 
        <Image source={require('../../assets/img/cart.png')}  style={{height:200,width:200}} />
    </View>
):(

<View style={styles.container}>
                            {ctx.value.cart.map(((item, i) =>
                                <View key={i} style={styles.mainDiv} >
                                    <View style={styles.iner_Div} >
                                        <View>
                                            <Text style={{ fontSize: 25, fontWeight: '700' }} >{item.name} </Text>
                                            <Text>{item.description === 'NaN' ? (null) : (item.description)} </Text>
                                        </View>
                                        <View>
                                            <Image source={{ uri: item.img }} style={{ width: 75, height: 75 }} />
                                        </View>
                                    </View>
                                    <View style={styles.priceDiv} >
                                        <Text style={{ fontSize: 18 }} > Amount : {item.count} Item</Text>

                                        <Text style={{ fontSize: 18 }} >IQD {item.total} </Text>
                                    </View>
                                    <View style={styles.removeIcon}>
                                        <Icon name='delete-outline' color='#f55' size={25} onPress={() => {
                                            this.deleteItem([item._id, ctx])
                                        }} />
                                    </View>

                                </View>
                            ))}
                            <View style={styles.priceDiv} >
                                <Text style={{ fontSize: 18 }} >Delivery Fee</Text>

                                <Text style={{ fontSize: 18 }} >IQD 5 </Text>
                            </View>
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', marginTop: 25 }} >
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                                    Total
    </Text>
                                <Text style={{ fontSize: 26, fontWeight: 'bold' }} >IQD  {ctx.value.summed+5}  </Text>
                            </View>
                            <View style={styles.cartMain} onTouchStart={() => {
                                this.order(ctx)
                            }} >
                                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }} >
                                    PLACE ORDER
                                        </Text>
                            </View>
                            </View>
                            )}
                        </View>
                    )
                }}
            </Context.Consumer>
        );
    }
}

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
    mainDiv: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        paddingBottom: 5
    },
    iner_Div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        paddingBottom: 5
    },
    priceDiv: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingTop: 5
    },
    removeIcon: {
        display: 'flex',
        width: '90%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    cartMain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 60,
        // marginLeft: 15,
        width: '90%',
        backgroundColor: '#08b4df',
        borderRadius: 10,
        marginTop: 50,
        color: '#fff'
    }
});

export default Cart;

