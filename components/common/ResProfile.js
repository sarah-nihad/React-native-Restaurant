
import React from 'react';
import Component from '@reactions/component';
import {
    StyleSheet, Text, View, TextInput, Image, ScrollView,} from 'react-native';
import { Icon } from 'react-native-elements'
import axios from 'axios';
import Context from '../../assets/js/context';
import TabViewExample from './TabViewExample';
// import Icon from 'react-native-ionicons'
import Host from '../../assets/js/host';

class ResProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            errors: false,
            visible: false,
            profile:[]
        };
    }

    

    componentDidMount(){
        console.log('sarah nihad');
        axios.get(Host+`api/v1/profile/profile?cat_id=${this.props.route.params.id}`)
        .then(response => {
          console.log('iddd',response.data);
          this.setState({ profile: response.data })
  
        })
        .catch(function (message) {
        })

      
    }

    

    componentDidUpdate(prevProps, prevState) {
        if (prevState.profile === this.state.profile) {
            console.log('pokemons state has changed.') 
            console.log(prevState.profile,this.state.profile);
            this.componentDidMount() 
        }
       
    
      }
  
    render() {
        const { img ,title, location} = this.props.route.params;
        return (

            <Context.Consumer>
                {ctx => {
                    return (
                        <View>

                            <Component initialState={{
                                visible: false, spin: false,


                            }}>
                                {({ state, setState }) => (
                                    <View>
                                    
                                            <View style={{ width: '100%', display: 'flex', height: '100%',zIndex:2 }} >
                                                <View style={{ width: '100%', height: 300 }} >
                                                    <View style={s.iconDiv}>
                                                        <Icon name='close' color='#fff' size={35} onPress={() => {
                                                            this.props.navigation.goBack()
                                                        }} />
                                                    </View>
                                                    <Image source={{uri:Host+img}} alt="img" style={{ width: '100%', height: 300 }} />
                                                </View>
                                                <View style={s.rowModProfTitle}>
                                                    <View style={s.ModProfTitle} >
                                                        <Text style={s.textMod} >{title} -  {location}  </Text>
                                                   
                                                    </View>
                                                </View>
                                                <TabViewExample  navigate={this.props.route.params.navigate}  profile={this.state.profile}  />

                                            </View>
                                      
                                       
                                    </View>

                                )}
                            </Component>
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
    newBtn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '800',
    },
    divBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 40,
        backgroundColor: '#bd1052',
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35

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
        display: 'flex',
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
        marginLeft: 15
    },
    input: {
        width: '55%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 15,
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

        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        paddingRight: 10,
        paddingTop: 10

    }

});
export default ResProfile;
