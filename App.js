import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import Header from './components/Header';
import LocationPicker from './components/LocationPicker';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Header title="Find your Car"/>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
      <LocationPicker />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();



export default function App() {
  return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
      </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
