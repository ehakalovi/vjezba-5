import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Naslov = (props) => {
    return (
        <View style={stil.zaglavlje}>
            <Text style={stil.naslov}>{props.naslov}</Text>
        </View>
    );
}

const stil = StyleSheet.create({
    naslov: {
        color: "red",
        fontSize: 25,
        fontWeight: "bold"
    },
    zaglavlje: {
        width: "100%",
        height: 90,
        paddingTop: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aqua"
    }
});

export default Naslov;