import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
        <View style={styles.positionItem}>
          <View style={styles.UnderItem}>
            <Image source={require('./TFTlogo1.png')} style={{ width: 80, height: 80, }}></Image>
            <Button
              title="B.F Sword"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
          <View style={styles.UnderItem}>
            <Image source={require('./TFTlogo1.png')} style={{ width: 80, height: 80, }}></Image>
            <Button
              title="B.F Sword"
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  positionItem: { alignItems: 'center', flexDirection: 'row',justifyContent: 'space-around', },
  WHItem: { width: 80, height: 80, },
  UnderItem: { justifyContent: 'center', flexDirection: 'column', }

});


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    BaseItemAll: BaseItem,
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
