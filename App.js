import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import Login from './src/components/Login';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBt54L9qu7ftgc2x44jrxt734m_C0gofWA",
      authDomain: "crmapp-c3a20.firebaseapp.com",
      databaseURL: "https://crmapp-c3a20.firebaseio.com",
      projectId: "crmapp-c3a20",
      storageBucket: "",
      messagingSenderId: "687056951240"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
