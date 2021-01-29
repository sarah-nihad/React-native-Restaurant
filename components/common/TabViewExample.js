import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import FirstRoute from './FirstRoute';
// const renderScene = ({ route }) => {
//   switch (route.key) {
//     case 'first':
//       return  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
//       // <FirstRoute foo={this.props.foo} />;
//     case 'second':
//       return  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
//       // <SecondRoute />;
//     default:
//       return null;
//   }
// };
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#f4511e' }}
    />
  );
  const renderScene = ({ route,jumpTo  }) => {
    switch (route.key) {
      case 'first':
        return  <FirstRoute jumpTo={jumpTo} profile={props.profile} props={props.navigate}  />;
      case 'second':
        return  <FirstRoute jumpTo={jumpTo} profile={props.profile} props={props.navigate}  /> 
        // <SecondRoute />;
      default:
        return null;
    }
  };
 
  return (
    <TabView 
    lazy
    ovescroll={true}
    
    swipeEnabled={true}
    style={styles.tab}  renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    zIndex:10
  },
  tab:{
    marginTop:60,
    backgroundColor:'#fff'
  }
});