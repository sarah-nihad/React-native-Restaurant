
import React, { Component } from 'react';
import {
  StyleSheet, Text, View,ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carsule1 from './Carsule1';
import Carsule2 from './Carsule2';
import Slide1 from './Slide1';
import TabViewExample from './common/TabViewExample';
import axios from 'axios';
import { Button } from 'native-base';
const styles = StyleSheet.create({
  offerDivText: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop:10
  },
  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f4511e',
    marginTop: 15,
    marginBottom:10,
    textAlign: 'center',
    borderBottomColor: '#f4511e',
    borderBottomWidth: 2
  }

});


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department:[]
    };
  }

  componentDidMount(){
    console.log('sarah nihad');
    axios.get(`http://172.22.176.1:5000/api/v1/department/getDep`, {

    })
      .then(response => {
        console.log(response.data);
        this.setState({ department: response.data })

      })
      .catch(function (message) {
      });

   
     
}
  render() {

   

    return (


      <ScrollView style={{ height: '100%' }} >

        <Slide1 />
        <View style={styles.offerDivText}  >
          <Text style={styles.offerText} > العروض المميزة</Text>
        </View>

        <Carsule1  name={this.props}/>
        <View style={styles.offerDivText}  >
          <Text style={styles.offerText} onPress={()=>{
            console.log(this.state.department);
          }}  >  المطاعم الجديدة</Text>
        </View>
        {/* <Carsule2 name={this.props} /> */}
     
     
      </ScrollView>


    )
  }
}
export default Main;
