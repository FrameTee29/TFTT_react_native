import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BFSWORD1 from './BFSWORD.js';
import Recurve from './Recurve';
import Tear from './Tear';
import ChainVest from './ChainVest';
import Negaton from './Negaton';
import Giant from './Giant';
import Spatula from './Spatula';
import Needlessly from './Needlesly';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>League of Legends</Text>),
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#110244' }}>
        <Image source={require('./TFTlogo1.png')} style={{ width: 180, height: 160, marginBottom: 20 }}></Image>
        <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#9B6E38', alignItems: 'center', marginBottom: 2 }}>TEAMFIGHT</Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#9B6E38', alignItems: 'center', marginBottom: 10 }}>TACTICS</Text>
        <Button
          title="Base Item"
          onPress={() => this.props.navigation.navigate('BaseItemAll')}
        />
        <Image source={require('./PEN.png')} style={{ width: 150, height: 100, marginTop: 20 }}></Image>
      </View>
    );
  }
}

class BaseItem extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>Base Item</Text>),
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#110244', alignItems: 'center',justifyContent: 'space-around', }}>
        {/*แถวที่ 1 B.F sword กับ Recurce Bow*/}
        <View style={styles.positionItem}> 
          <View style={styles.UnderItem,{marginRight:8}}>
            <Image source={require('./Item/B_F_Sword.jpg')} style={styles.ImageS}></Image>
            <Button
              title="B.F Sword"
              onPress={() => this.props.navigation.navigate('BFsword')} />
          </View>
          <View style={styles.UnderItem,{marginLeft:8}}>
            <Image source={require('./Item/Recurce_Bow.jpg')} style={styles.ImageS}></Image>
            <Button
              title="Recurve Bow"
              onPress={() => this.props.navigation.navigate('Recurce1')} />
          </View>
        </View>
        {/*แถวที่ 2 Needlessly large rod กับ Tear of the Goodess*/}
        <View style={styles.positionItem}> 
          <View style={styles.UnderItem,{marginRight:8}}>
            <Image source={require('./Item/Needlessly_Large_rod.jpg')} style={styles.ImageS}></Image>
            <Button
              title="Needlessly large rod"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
          <View style={styles.UnderItem,{marginLeft:8}}>
            <Image source={require('./Item/Tear.jpg')} style={styles.ImageS}></Image>
            <Button
              title="Tear of the Goodess"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        </View>
        {/*แถวที่ 3 Chain Vest กับ */}
        <View style={styles.positionItem}> 
          <View style={styles.UnderItem,{marginRight:8}}>
            <Image source={require('./Item/Chain_Vest.jpg')} style={styles.ImageS}></Image>
            <Button
              title="Chain Vest"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
          <View style={styles.UnderItem,{marginLeft:8}}>
            <Image source={require('./Item/Negaton.jpg')} style={styles.ImageS}></Image>
            <Button
              title="Negatron Cloak"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        </View>
        {/*แถวที่ 4 */}
        <View style={styles.positionItem}> 
          <View style={styles.UnderItem,{marginRight:8}}>
            <Image source={require('./Item/Giant_Blet.jpg')} style={styles.ImageS}></Image>
            <Button
              title="Giant Belt"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
          <View style={styles.UnderItem,{marginLeft:8}}>
            <Image source={require('./Item/Spatula.jpg')} style={styles.ImageS}></Image>
            <Button
              title="Spatula"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  positionItem: { flex:2,alignItems: 'center', flexDirection: 'row',justifyContent: 'space-between',  },
  WHItem: { width: 80, height: 80, },
  UnderItem: {flex:1, justifyContent: 'center', flexDirection: 'column',alignItems: 'center', },
  ImageS:{width: 80, height: 80,alignItems: 'center',justifyContent: 'center',}

});




{/*Function สำหรับ link*/}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    BaseItemAll: BaseItem,
    BFsword:BFSWORD1,
    Recurce1:Recurve,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
