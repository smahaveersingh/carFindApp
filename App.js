import React, {useEffect} from 'react';
import { Button, StyleSheet, View, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import LocationPicker from './components/LocationPicker';
import RootStackScreen from './components/RootStackScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './components/context';
import { DrawerContent } from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);   // to check whether the user is authenticated or not
  const [userToken, setUserToken] = React.useState(null);   //token to valid user
  
  const authContext = React.useMemo(() => ({                //using useMemo() to speed up the auth process in 1000 milli sec
    signIn: () => {
      setUserToken('fghj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fghj');
      setIsLoading(false);
    },
  }));                       
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);    //timeout of 1000 milli sec to check whether the user is authenticated or not
  },[]);

  if(isLoading) {
    return (
      <View style={{flex:1, justifyContent: "center",  alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  function HomeScreen({navigation}) {
    return (
      <View style={styles.screen}>
      <Header title="Find your Car"/>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Drawer" />
      <LocationPicker />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    {userToken != null ? (
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
     <Drawer.Screen name="Home" component={HomeScreen} />
     </Drawer.Navigator>
    )
    :
    <RootStackScreen />
    }
  </NavigationContainer>
  
  </AuthContext.Provider> 
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;

