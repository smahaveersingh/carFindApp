import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
        <Text style={[styles.text_header, {marginTop: 10}]}>{props.title}</Text>
        </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: 90,
        padding: 36,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderTitle: {
        color: 'white',
        fontSize: 18
    },
    text_header: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 40
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#009387'
    },
    container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
});

export default Header;