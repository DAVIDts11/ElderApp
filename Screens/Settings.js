import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

const Empty = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="#009387" barStyle="light-content" />

    <View style={styles.header}>
      <Text style={styles.text_header}>Settings Page </Text>
    </View>

    <View style={styles.footer} />
  </View>
);

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFD7F7',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
