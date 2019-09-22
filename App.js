import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BFSWORD1 from './BFSWORD.js';
import Recurve from './Recurve';
import Tearofgod from './Tear';
import ChainVesttt from './ChainVest';
import Negatonn1 from './Negaton';
import Giant1 from './Giant';
import Spatula1 from './Spatula';
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
      <View style={{ flex: 1, backgroundColor: '#110244', justifyContent: 'space-around', flexDirection: 'column', }}>

        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/B_F_Sword.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 85 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>พลังโจมตี +15 หน่วย</Text>
            <Button
              title="B.F Sword"
              onPress={() => this.props.navigation.navigate('BFsword')} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/Recurce_Bow.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 85 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>ความเร็วโจมตี+20.0 % </Text>
            <Button
              title="Recurve Bow"
              onPress={() => this.props.navigation.navigate('Recurce1')} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/Needlessly_Large_rod.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 72 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>พลังสกิล+20.0 %</Text>
            <Button
              title="Needlessly large rod"
              onPress={() => this.props.navigation.navigate('Need')} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/Tear.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 75 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>มานา +20.0 หน่วย</Text>
            <Button
              title="Tear of the Goodess"
              onPress={() => this.props.navigation.navigate('Tear1')} />
          </View>
        </View>




        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/Chain_Vest.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 90 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>เกราะ +20.0 หน่วย</Text>
            <Button
              title="Chain Vest"
              onPress={() => this.props.navigation.navigate('Chain')} />
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/Negaton.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 80 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>ต้านทานเวท +20.0 หน่วย</Text>
            <Button
              title="Negatron Cloak"
              onPress={() => this.props.navigation.navigate('Nega1')} />
          </View>
        </View>


        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/Giant_Blet.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 80 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>หลังชีวิต +200.0 หน่วย</Text>
            <Button
              title="Giant Belt"
              onPress={() => this.props.navigation.navigate('Giants')} />
          </View>
        </View>


        <View style={{ flexDirection: 'row', paddingLeft: 40 }}>
          <Image source={require('./Item/Spatula.jpg')} style={styles.ImageS}></Image>
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingLeft: 80 }}>
            <Text style={{ fontSize: 15, color: 'white', }}>รอผสมกับไอเท็มชิ้นอื่น</Text>
            <Button
              title="Spatula"
              onPress={() => this.props.navigation.navigate('SapatulaS')} />
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  positionItem: { flex: 2, alignItems: 'flex-start', flexDirection: 'row', },
  WHItem: { width: 80, height: 80, },
  UnderItem: { flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center', },
  ImageS: { width: 60, height: 60, alignItems: 'center', justifyContent: 'center', }

});




{/*Function สำหรับ link*/ }
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    BaseItemAll: BaseItem,
    BFsword: BFSWORD1,
    Recurce1: Recurve,
    Need: Needlessly,
    Tear1: Tearofgod,
    Chain: ChainVesttt,
    Nega1: Negatonn1,
    Giants: Giant1,
    SapatulaS: Spatula1,
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
