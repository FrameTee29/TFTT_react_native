import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class BFSWORD1 extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        headerTitle: (<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#110244', alignItems: 'center', }}>B.F. Sword</Text>),
      }
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#110244' }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#9B6E38', alignItems: 'center', marginBottom: 2 }}>TEAMFIGHT</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#9B6E38', alignItems: 'center', marginBottom: 10 }}>TACTICS</Text>
          <Image source={require('./PEN.png')} style={{ width: 150, height: 100, marginTop: 20 }}></Image>
        </View>
      );
    }
  }
