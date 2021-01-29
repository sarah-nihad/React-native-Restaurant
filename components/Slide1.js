
import React, { Component } from 'react';
import {
    StyleSheet, Text, View,Image,ImageBackground
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/FontAwesome';
import Context from '../assets/js/context';
import Host from '../assets/js/host';
const styles = StyleSheet.create({


});


class Slide1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageLoading: true,
            images: [

                //  "https://source.unsplash.com/1024x768/?tree", // Network image
                require('../assets/img/ahwak.jpg'),          // Local image
                require('../assets/img/fier.jpg'),
                require('../assets/img/ghoust.jpg'),
                require('../assets/img/mandy.jpg'),
                require('../assets/img/shekh.jpg'),
            ]
        };
    }


    render() {


        return (
            <Context.Consumer>
            {ctx => {
                return (

            <View>



                <SliderBox 
                images={ctx.value.slider1}              
                   autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    ImageComponentStyle={{ borderRadius: 5, width: '98%', marginTop: 5 }}
                    imageLoadingColor="#2196F3"
                   
                />


            {/* <Image style={{width:300,height:300}}
              source={this.state.isImageLoading ? require('../assets/img/asdf.png') : {uri: "https://source.unsplash.com/1024x768/?tree"}}
              onLoad={() => this.setState({ isImageLoading: false })}
            />                 */}
        
            </View>
                )}}
            </Context.Consumer>

        )
    }
}
export default Slide1;
