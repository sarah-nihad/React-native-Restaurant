
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { ActivityIndicator, StyleSheet, View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import Drawercontent from './components/common/Drawercontent';
import ResProfile from './components/common/ResProfile';
import MenuItem from './components/common/MenuItem';
import Cart from './components/common/Cart';
import Resturant from './components/Resturant';
import Login from './components/Login';
import Help from './components/Help';
import Host from './assets/js/host'
import Context from './assets/js/context';
import Main from "./components/Main";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Main"
    
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: true, title: 'عروض',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
          headerRight: () => (
            <Icon color='#fff'
              name="menu" onPress={() => {
                navigation.toggleDrawer()
              }} />
          ),
          headerLeft: () => (
            <></>
          ),
        }}

      />    
    </Stack.Navigator>
  );
}
function ResturantScreen({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Main"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Resturant"
        component={Resturant}
        options={{
          headerShown: true, title: 'Resturant',
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
          headerRight: () => (
            <Icon color='#fff'
              name="menu" onPress={() => {
                navigation.toggleDrawer()
              }} />
          ),
          headerLeft: () => (
            <Icon color='#fff'
              name="shopping-cart" onPress={() => {
                navigation.navigate('Cart')
              }} />
          ),
        }}
      />    
    </Stack.Navigator>
  );
}

function LoginScreen({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Main"
      screenOptions={{ gestureEnabled: false }} >
      <Stack.Screen name="Login" component={Login}
        options={{ headerShown: true, title: 'Login',
          headerStyle: { backgroundColor: '#f4511e', },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',textAlign: 'center'},
          headerRight: () => (<Icon color='#fff' name="menu" onPress={() => {navigation.toggleDrawer() }} /> ),
          headerLeft: () => ( <></>),
        }}
      />    
    </Stack.Navigator>
  );
}

function HelpScreen({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Main"
      screenOptions={{ gestureEnabled: false }} >
      <Stack.Screen name="Help" component={Help}
        options={{ headerShown: true, title: 'Help',
          headerStyle: { backgroundColor: '#f4511e', },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',textAlign: 'center'},
          headerRight: () => (<Icon color='#fff' name="menu" onPress={() => {navigation.toggleDrawer() }} /> ),
          headerLeft: () => ( <></>),
        }}
      />    
    </Stack.Navigator>
  );
}
function CartScreen({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Main"
      screenOptions={{ gestureEnabled: false }} >
      <Stack.Screen name="Cart" component={Cart}
        options={{ headerShown: true, title: 'Basket',
          headerStyle: { backgroundColor: '#f4511e', },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',textAlign: 'center'},
          headerRight: () => (<Icon color='#fff' name="menu" onPress={() => {navigation.toggleDrawer() }} /> ),
          headerLeft: () => ( <></>),
        }}
      />    
    </Stack.Navigator>
  );
}

function MenuItemScreen({ navigation }) {
  return (
    <Stack.Navigator
      // initialRouteName="Main"
      screenOptions={{ gestureEnabled: false }} >
      <Stack.Screen name="MenuItem" component={MenuItem}
          options={{ headerShown: true, title: 'Basket',
          headerStyle: { backgroundColor: '#f4511e', },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold',textAlign: 'center'},
          headerRight: () => (<Icon color='#fff' name="menu" onPress={() => {navigation.toggleDrawer() }} /> ),
          headerLeft: () => ( <></>),
        }}
      />    
    </Stack.Navigator>
  );
}



function AppDrawer({ navigation }) {
  return (

    <Drawer.Navigator
      drawerContent={props => <Drawercontent {...props}
      />}
      initialRouteName="Home"
      gestureEnabled={false}
      drawerType='front'
      drawerPosition='right'
      drawerContentOptions={{
        activeBackgroundColor: 'red'
      }}
    >
      <Drawer.Screen name="Main" component={HomeStackScreen} />
      <Drawer.Screen name="ResProfile" component={ResProfile} options={{ headerShown: false }}/>
      <Drawer.Screen name="MenuItem" component={MenuItem} options={{ headerShown: false }}/>
      <Drawer.Screen name="Resturant" component={ResturantScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>

  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: '',
      password: '',
      token: false,
      wait: true,
      resturant:[],
      slider1:[],
      cart:[],
      data1:[],
      summed:''
     
    };

  }

  componentDidMount(){
  
    axios.get(Host+`api/v1/catecory/`)
    .then(response => {
      console.log(response.data);
      this.setState({ resturant: response.data })

    })
    .catch(function (message) {
    });
    
    axios.get(Host+`api/v1/slider1/`)
    .then(response => {
      console.log(response.data);
      var arr=[];
      for (let index = 0; index < response.data.length; index++) {
        const images = Host+response.data[index].image;
        arr.push(images)
      }
      this.setState({ slider1: arr })
      console.log('sss',arr);

    })
    .catch(function (message) {
    });  
    this.getCart();   
}

getCart(){
  axios.get(Host+`api/v1/cart/`)
  .then(response => {
    console.log('cart',response.data);
    
    
    var arr=[] ;
    var arr1=[]
    for (let index = 0; index < response.data.length; index++) {
      const element = {
        img:Host+response.data[index].img,
        name:response.data[index].name,
        price:response.data[index].price,
        description:response.data[index].description,
        count:response.data[index].count,
        total:response.data[index].total,
        _id:response.data[index]._id
      }
      const total=response.data[index].total;
     
      arr1.push(element)
      arr.push(total)
    }
    this.setState({data1:arr,cart:arr1})
    this.Add()
  })
  .catch(function (message) {
  }); 
}

Add(){
  setTimeout(() => {
    console.log('total',this.state.data1);
  }, 300);
  for (var i = 0, sum = 0; i < this.state.data1.length; sum += Number(this.state.data1[i++]));
console.log('suuumed',sum);
this.setState({summed:sum})
}

  render() {
    return (
      <Context.Provider value={{
        value: this.state,
        action: {
          getCart:()=>{
            this.getCart()
          }

        }
      }}

      >

        <NavigationContainer>

          <Stack.Navigator
           initialRouteName="Mains">

            <Stack.Screen
              name="Mains"
              component={AppDrawer}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="MenuItem"
              component={MenuItem}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    );
  }
}
export default App;

