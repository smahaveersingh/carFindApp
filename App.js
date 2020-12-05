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
import AsyncStorage from '@react-native-community/async-storage';
const Drawer = createDrawerNavigator();

const App = () => {
  //const [isLoading, setIsLoading] = React.useState(true);   // to check whether the user is authenticated or not
  //const [userToken, setUserToken] = React.useState(null);   //token to valid user
  
  const intialLoginState = { //Reducer state
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => { //Reducer function
    switch(action.type) {
        case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
        case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
        case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
        case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, intialLoginState);

  const authContext = React.useMemo(() => ({                //using useMemo() to speed up the auth process in 1000 milli sec
    signIn: async(userName,password) => {
      //setUserToken('fghj');
      //setIsLoading(false);
      let userToken;
      userToken = null;
      if(userName == 'user' && password == 'pass') {
        try {
          userToken = 'dfgdfg';
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
          console.log(e);
        }
      }
      console.log('user token:  ', userToken);
      dispatch({type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      //setUserToken(null);
      //setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    signUp: () => {
      setUserToken('fghj');
      setIsLoading(false);
    },
  }), []);                       
  useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken =  null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      //console.log('user token:  ', userToken);
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);    //timeout of 1000 milli sec to check whether the user is authenticated or not
  },[]);

  if(loginState.isLoading) {
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
    {loginState.userToken != null ? (
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

