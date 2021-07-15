import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';

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
        <TouchableOpacity onPress={() => navigation.navigate('Request Meds')} style={styles.rects}>
          <Text style={styles.secText}>Request Medication</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Pick Me Up')} style={[styles.rects]}>
          <Text style={styles.secText}>Request A Pick Up Ride!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ViewPage')} style={styles.rects}>
          <Text style={styles.secText}>My Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://chat.whatsapp.com/Hd74Cc8Vvc2IP0ff1JMVBG')}
          style={styles.rects}
        >
          <Text style={styles.secText}>Chat with eachother!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.rects}>
          <Text style={styles.secText}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(`tel:${100}`)} style={styles.emerg}>
          <Text style={styles.secTextEm}>EMERGENCY CALL</Text>
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
  emerg: {
    backgroundColor: '#F29B9B',
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  rects: {
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
  secTextEm: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default HomepageMember;
