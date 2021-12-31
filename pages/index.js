// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from '../components/main';

export default function App() {
  return (
    <View style={styles.container}>

      <Main/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
