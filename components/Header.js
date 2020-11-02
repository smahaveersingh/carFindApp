import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return (
        <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>{props.title}</Text>
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
    }
});

export default Header;