import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import LocationPicker from './components/LocationPicker';
import RootStackScreen from './components/RootStackScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <RootStackScreen />
    {/* <View style={styles.screen}> {...}
      <Header title="Find your Car"/>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
      <LocationPicker />
  </View> */}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;

