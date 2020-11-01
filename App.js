import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import LocationPicker from './components/LocationPicker';
 
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Find your Car"/>
      <LocationPicker />
    </View> 
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
