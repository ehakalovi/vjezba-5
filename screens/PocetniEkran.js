import React, { useState } from 'react';
import { Keyboard, Button, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Kartica from './../components/Kartica';
import UnosTemperature from '../components/UnosTemperature';

const PocetniEkran = (props) => {
    const [unos, postaviUnos] = useState('');
    const [odabirCelsius, postaviOdabirCelsius] = useState(false);
    const [odabirFahrenheit, postaviOdabirFahrenheit] = useState(false);
    const [odabraniBroj, postaviOdabraniBroj] = useState();
    const [temporaryUnos, postaviTemporaryUnos] = useState('');

    const unosProvjeraBroja = (noviUnos) => {
        postaviUnos(noviUnos.replace(',', '.'));
    }
    const racunajFahrenheit = () => {
        postaviOdabirFahrenheit(false);
        const broj = parseFloat(unos);
        if (broj == NaN || broj < -1000 || broj > 1000) {
            return;
        }
        postaviOdabraniBroj(broj * 1.8 + 32);
        postaviTemporaryUnos(broj);
        postaviOdabirCelsius(true);
        postaviUnos('');
    }
    const racunajCelsius = () => {
        postaviOdabirCelsius(false);
        const broj = parseFloat(unos);
        if (broj == NaN || broj < -1000 || broj > 1000) {
            return;
        }
        postaviOdabraniBroj((broj - 32) / 1.8);
        postaviTemporaryUnos(broj);
        postaviOdabirFahrenheit(true);
        postaviUnos('');
    }
    let prikazBroja;
    if (odabirCelsius) {
        prikazBroja = <Text style={stil.dekoracija}>{temporaryUnos} °C = {odabraniBroj.toFixed(2)} °F</Text>
    } else if (odabirFahrenheit) {
        prikazBroja = <Text style={stil.dekoracija}>{temporaryUnos} °F = {odabraniBroj.toFixed(2)} °C</Text>
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={stil.ekran}>
                <Kartica style={stil.unos}>
                    <Text style={stil.dekoracija}>Unesi temperaturu za pretvorbu</Text>
                    <UnosTemperature
                        style={stil.UnosTemperature}
                        keyboardType='numeric'
                        maxLength={6}
                        blurOnSubmit
                        value={unos}
                        onChangeText={unosProvjeraBroja}
                    />
                    <View style={stil.tipke}>
                        <Button color="red" title="Celsius" onPress={racunajFahrenheit} />
                        <Button color="red" title="Fahrenheit" onPress={racunajCelsius} />
                    </View>
                </Kartica>
                {prikazBroja}
            </View>
        </TouchableWithoutFeedback>
    );
}

const stil = StyleSheet.create({
    dekoracija: {
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: "bold",
        padding: 5,
        backgroundColor: "orange"
    },
    ekran: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    naslov: {
        fontSize: 20,
        marginVertical: 10
    },
    unos: {
        width: 300,
        maxWidth: "80%"
    },
    UnosTemperature: {
        width: 50
    },
    tipke: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
})

export default PocetniEkran;