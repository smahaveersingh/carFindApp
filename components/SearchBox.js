import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Input, InputGroup} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
const SearchBox = () => {

    return(
        <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>Select your location</Text>
            <InputGroup>
                <Icon name="search" size={15} color="#FF5E3A" />
                <Input style={styles.inputSearch} placeholder="Choose Location" />
            </InputGroup>
            </View>

            <View style={styles.secondInputWrapper}>
            <Text style={styles.label}>Select Car Location</Text>
            <InputGroup>
                <Icon name="search" size={15} color="#FF5E3A" />
                <Input style={styles.inputSearch} placeholder="Choose Location" />
            </InputGroup>
            </View>

        </View>
    );

};

var width = Dimensions.get("window").width; //full width

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    searchBox:{
        top:0,
        position:"absolute",
        width:width
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    secondInputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle: "italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
  });

export default SearchBox;