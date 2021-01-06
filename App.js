import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Naslov from './components/Naslov';
import PocetniEkran from './screens/PocetniEkran'

export default function App() {
  return (
    <View style={styles.ekran}>
      <Naslov naslov={"Pretvarač temperature"} />
      <PocetniEkran />
    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1
  }
});
