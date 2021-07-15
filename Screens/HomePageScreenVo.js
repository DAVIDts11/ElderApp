import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';

const HomepageVolunteer = ({ navigation }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log('store user = ', currentUser);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>
          Hello {currentUser.name}! Thanks for Volunteering @ EldApp!
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('ViewPageVol')} style={styles.signIn}>
          <Text style={styles.secText}>View Medication Requests</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PickupVol')} style={styles.signIn}>
          <Text style={styles.secText}>View Pick Up Requests</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://chat.whatsapp.com/Hd74Cc8Vvc2IP0ff1JMVBG')}
          style={styles.signIn}
        >
          <Text style={styles.secText}>WhatsApp Group to Chat/Call!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.signIn}>
          <Text style={styles.secText}>Sign Out</Text>
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
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  signIn: {
    backgroundColor: 'white',
    display: 'flex',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  secText: {
    color: '#98bc98',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default HomepageVolunteer;
