import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    StyleSheet
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import MapPreview from './MapPreview';

const LocationPicker = props => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if(result.status !== 'granted') {
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant location permissions to use this app.',
                [{text: 'Okay'}]
            );
            return false;
        }
        return true;
    };


    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }

        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({timeout: 5000});
            console.log(location);
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
        } catch(err) {
            Alert.alert(
                'Could not fetch Location!',
                [{text: 'Okay'}]
            );
        }
        setIsFetching(false);
    };

    return (
    <View style={styles.LocationPicker}>
        <MapPreview style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
        <ActivityIndicator size="large" color="#000000" /> 
    ) : (    
        <Text>No location chosen yet!</Text>
    )}
        </MapPreview>
        <Button
            title = "Get Car Location"
            color= "#000000"
            onPress = {getLocationHandler}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    LocationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100',
        height: 650,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LocationPicker;