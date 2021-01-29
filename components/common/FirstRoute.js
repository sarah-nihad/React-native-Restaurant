
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, ImageBackground, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/FontAwesome';
import Host from '../../assets/js/host'
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 0;
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
};

class FirstRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }





    render() {


        return (


            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        setTimeout(() => {
                            this.props.jumpTo('second')
                        }, 600);
                    }
                }}
                scrollEventThrottle={9000}
                style={[styles.ScrollView1, { backgroundColor: '#eee' }]} >
                {this.props.profile.map(((item, i) =>
                    <TouchableOpacity key={i} onPress={() => {
                        console.log('props', this.props);
                       
                        this.props.props.navigation.push('MenuItem', {
                            img: item.image,
                            name: item.name,
                            id: item._id,
                            price: item.price
                        })
                    }}  >


                        <View style={styles.rowView} >
                            <Text>{item.name}</Text>
                            <Image source={{ uri: Host + item.image }} alt='img' style={{ height: 40, width: 40 }} />
                        </View>
                    </TouchableOpacity>
                ))}
                <View style={{ height: 50 }} />
            </ScrollView>


        )
    }
}
const styles = StyleSheet.create({
    ScrollView1: {
        flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',



    },
    rowView: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10
    }
});
export default FirstRoute;
