import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Header from './components/Header';
import LocationPicker from './components/LocationPicker';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Find your Car"/>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
      <LocationPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;

