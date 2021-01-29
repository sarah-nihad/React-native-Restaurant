
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Context from '../assets/js/context';
import Host from '../assets/js/host';
class Resturant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            isImageLoading: 'true',
            carouselItems: [
                {
                    title: "دار السلطاني",
                    location: "كرادة",
                    img: props.isImageLoading ? require('../assets/img/asdf.png') : { uri: "https://source.unsplash.com/1024x768/?tree" }
                    //  require('../assets/img/pizza.jpg'),
                },
                {
                    title: "اهواك",
                    location: "منصور",
                    img: require('../assets/img/fish.jpg'),
                },
                {
                    title: "سويت لتل ثنكس",
                    location: "بابلون مول",
                    img: require('../assets/img/toot.jpg'),
                },
                {
                    title: "سماش برجر",
                    location: "يرموك",
                    img: require('../assets/img/burger.jpg'),
                },
                {
                    title: "زمرده",
                    location: "اعظمية",
                    img: require('../assets/img/zomorda.jpg'),
                },
            ]
        };
    }


    render() {


        return (
            <Context.Consumer>
            {ctx => {
                return (
            <ScrollView style={{ marginTop: 10, marginBottom: 20, width: '100%', height: '100%' }}>
                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between', padding: 15 }} >
                    {ctx.value.resturant.map((item, i) => (
                        <View key={i} style={{ width: '48%', display: 'flex', height: 230, marginTop: 8 }}
                        >
                          
                                <TouchableOpacity   onPress={()=>{ 
                                     this.props.navigation.navigate('ResProfile', {  
                             img: item.image,
                             title:item.name,
                             location:item.location,
                             id:item._id,
                             navigate:this.props
                          } )
                            }} >
                            <View style={{ backgroundColor: '#ddd', borderRadius: 20, height: 230, width: '100%' }}>
                                <Image source={{uri:Host+item.image}}
                                    style={{flex: 1, width: null, height: null, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                                <View style={styles.divPercentage} >
                                    <View style={styles.offerPercentage} />
                                    <Text style={styles.textPercentage} >10 %</Text>
                                </View>
                                <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, fontWeight: '900' }}>
                                    {item.name}
                                </Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
                )}}
                </Context.Consumer>
        )
    }
}

const styles = StyleSheet.create({

    offerPercentage: {
        position: 'absolute',
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 100,
        borderTopWidth: 100,
        borderLeftColor: 'transparent',
        borderTopColor: 'red',
        borderTopRightRadius: 20

    },
    divPercentage: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'flex-end',
        // alignItems:'flex-end'

    },
    textPercentage: {
        zIndex: 2,
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        paddingRight: 10,
        paddingTop: 10


    }
});


export default Resturant;
