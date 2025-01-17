import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const UnosTemperature = (props) => {
    return (
        <TextInput {...props} style={{ ...stil.unos, ...props.style }} />
    );
}

const stil = StyleSheet.create({
    unos: {
        height: 35,
        borderBottomWidth: 2,
        borderBottomColor: "orange",
        marginVertical: 10
    }
});

export default UnosTemperature;