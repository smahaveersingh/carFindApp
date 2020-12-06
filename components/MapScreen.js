import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { MapView, Permissions } from 'expo';

export default class MapScreen extends React.Component {
    render() {
        return (
           <MapView
           style={{flex: 1}}
           >

           </MapView>
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

