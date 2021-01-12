import React from 'react';
import Navigation from './Navigation/Navigation'
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <Navigation/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})