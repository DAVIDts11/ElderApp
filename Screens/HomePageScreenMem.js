import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

const HomepageMember = ({ navigation }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log('store user = ', currentUser);
  console.log(currentUser);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Hello {currentUser.name}!</Text>
        <Text style={styles.text_header}>What would you like to do today?</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Request Meds')}
          style={styles.requestMeds}
        >
          <Text style={styles.secText}>Request Medication</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Pick Me Up')}
          style={[styles.pickMeUpstyle]}
        >
          <Text style={styles.secText}>Request A Pick Up Ride!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ViewPage')} style={styles.viewPage}>
          <Text style={styles.secText}>My Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://chat.whatsapp.com/Hd74Cc8Vvc2IP0ff1JMVBG')}
          style={styles.signinAdds}
        >
          <Text style={styles.secText}>Chat with eachother!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MainScreen')}
          style={styles.mainScreen}
        >
          <Text style={styles.secText}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(`tel:${100}`)} style={styles.signoutAdd}>
          <LinearGradient colors={['#F29B9B', '#F7665E']} style={styles.signIn}>
            <Text style={styles.secTextEm}>EMERGENCY CALL</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  requestMeds: {
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  secText: {
    color: '#98bc98',
    fontSize: 30,
    fontWeight: 'bold',
  },
  pickMeUpstyle: {
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  viewPage: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  signinAdds: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  mainScreen: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  signoutAdd: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginTop: 15,
  },
  secTextEm: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default HomepageMember;
