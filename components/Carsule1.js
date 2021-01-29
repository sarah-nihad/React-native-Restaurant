
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import Context from '../assets/js/context';
import Host from '../assets/js/host';
// var isImageLoading=true
class Carsule1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageLoading:true,
            carouselItems: [
                {
                    title: "دار السلطاني",
                    img:props.isImageLoading ? require('../assets/img/asdf.png') : {uri: "http://localhost:5000/undefined_1610970852536.jpg"}
                    //  require('../assets/img/pizza.jpg'),
                },
                {
                    title: "اهواك",
                    img: require('../assets/img/fish.jpg'),
                },
                {
                    title: "سويت لتل ثنكس",
                    img: require('../assets/img/toot.jpg'),
                },
                {
                    title: "سماش برجر",
                    img: require('../assets/img/burger.jpg'),
                },
                {
                    title: "زمرده",
                    img: require('../assets/img/zomorda.jpg'),
                },
            ]
        };
    }

    _renderItem({ item, index }) {
        return (
            <TouchableOpacity   onPress={()=>{
                this.props.navigation.navigate('ResProfile', {  
                 img: item.image,
                 title:item.name,
                 location:item.location,
                 id:item._id
              } )
                }}  >
            <View style={{backgroundColor: '#ddd',borderRadius: 20,height: 250, }}
          >
 
                <Image source={{uri:Host+item.image}}
                
                style={{
                    flex: 1,
                    width: null,
                    height: null, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20
                }} />
                <View style={styles.divPercentage} >
                    <View style={styles.offerPercentage} />

                    <Text style={styles.textPercentage} >10 %</Text>
                </View>


                <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, fontWeight: '900' }}>{item.name}</Text>

            </View>
            </TouchableOpacity>
        )
    }
    render() {


        return (
            <Context.Consumer>
            {ctx => {
                return (
            <SafeAreaView style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', display: 'flex' }}
              >
                    <Carousel
                        ref={ref => this.carousel = ref}
                        data={ctx.value.resturant}
                        sliderWidth={420}
                        itemWidth={320}
                        renderItem={({item, index}) => {
                            return (

                                <TouchableOpacity   onPress={()=>{
                                  
                                    this.props.name.navigation.navigate('ResProfile', {  
                                     img: item.image,
                                     title:item.name,
                                     location:item.location,
                                     id:item._id,
                                     navigate:this.props.name
                                  } )
                                    }}  >
                                <View style={{backgroundColor: '#ddd',borderRadius: 20,height: 250, }}
                              >
                     
                                    <Image source={this.state.isImageLoading===true ? require('../assets/img/asdf.jpg') : {uri:Host+item.image}}
                                    
                                    style={{
                                        flex: 1,
                                        width: null,
                                        height: null, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20
                                    }} />
                                    <View style={styles.divPercentage} >
                                        <View style={styles.offerPercentage} />
                    
                                        <Text style={styles.textPercentage} >10 %</Text>
                                    </View>
                    
                    
                                    <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, fontWeight: '900' }}>{item.name}</Text>
                    
                                </View>
                                </TouchableOpacity>

                            )}}
                        onSnapToItem={index => this.setState({ activeIndex: index })}
                        layout={'default'} 
                        slideStyle={{margin:10}}
                        autoplay
                        loop
                        onLayout={()=> this.setState({isImageLoading:false})} 
                        inactiveSlideOpacity={1}
                        inactiveSlideScale={1}/>
                </View>
              
            </SafeAreaView>
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
        borderTopRightRadius:20

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


export default Carsule1;
