
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity,Button
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ResProfile from './common/ResProfile';
class Carsule2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex:0,
            isImageLoading:'true',
            carouselItems: [
                {
                    title: "دار السلطاني",
                    location:"كرادة",
                    img:props.isImageLoading ? require('../assets/img/asdf.png') : {uri: "http://172.22.176.1:5000/undefined_1610970852536.jpg"}
                    //  require('../assets/img/pizza.jpg'),
                },
                {
                    title: "اهواك",
                    location:"منصور",
                    img: require('../assets/img/fish.jpg'),
                },
                {
                    title: "سويت لتل ثنكس",
                    location:"بابلون مول",
                    img: require('../assets/img/toot.jpg'),
                },
                {
                    title: "سماش برجر",
                    location:"يرموك",
                    img: require('../assets/img/burger.jpg'),
                },
                {
                    title: "زمرده",
                    location:"اعظمية",
                    img: require('../assets/img/zomorda.jpg'),
                },
            ]
        };
    }
   
    
    render() {


        return (

            <SafeAreaView style={{ marginTop: 10 ,marginBottom:10}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', display: 'flex' }}>
                    <Carousel
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={200}
                        itemWidth={200}
                        renderItem={({item, index}) => {
                            return (
                    
                                // <ResProfile  img={item.img}  title={item.title} location={item.location} />
                                <TouchableOpacity onPress={()=>{
                               this.props.name.navigation.navigate('ResProfile', {  
                                img: item.img,
                                title:item.title,
                                location:item.location
                             } )
                               
                                }}>
                                <View style={{
                                    backgroundColor: '#ddd',
                                    borderRadius: 20,
                                    height: 250,
                    
                                    // width: 260
                                }}>
                     
                                    <Image source={item.img}
                                   
                                    style={{
                                        flex: 1,
                                        width: null,
                                        height: null, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20
                                    }} />
                                    <View style={styles.divPercentage} >
                                        <View style={styles.offerPercentage} />
                    
                                        <Text style={styles.textPercentage} >10 %</Text>
                                    </View>
                    
                    
                                 
                                    <Text   style={{ fontSize: 20, textAlign: 'center', padding: 10, fontWeight: '900' }}>{item.title}
                                     </Text>
                                    
                    
                                </View>
                                </TouchableOpacity> 
                            )
                        }}
                        onSnapToItem = { index => this.setState({activeIndex:index}) }
                        layout={'default'}   
                        autoplay={false}                      
                        loop   
                        slideStyle={{margin:15}}
                        // onLayout={()=> console.log('ddd')} 
                        inactiveSlideOpacity={1}
                        inactiveSlideScale={1}
                        extraData={this.props}
                        
                        />
                </View>
              
            </SafeAreaView>

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


export default Carsule2;
