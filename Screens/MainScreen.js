import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// import { useTheme } from '@react-navigation/native';

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="stretch" />
    </View>
    <View style={styles.footer}>
      <Text style={styles.title}>Welcome to EldHelp!</Text>
      <Text style={styles.text}>Sign in with an account</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <LinearGradient colors={['#98bc98', '#91c391']} style={styles.signIn}>
            <Text style={styles.textSign}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default MainScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98bc98',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 60,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
    fontSize: 20,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 220,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
  },
});
