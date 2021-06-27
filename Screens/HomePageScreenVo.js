import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const HomepageVolunteer = ({ navigation }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log('store user = ', currentUser);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Hello {currentUser.email}! Thanks for Volunteering</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPageVol')}
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: '#98bc98',
              },
            ]}
          >
            See all medication requests
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PickupVol')}
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: '#98bc98',
              },
            ]}
          >
            See all pick up requests
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainScreen')}
          style={[
            styles.signIn,
            {
              borderColor: '#009387',
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: '#98bc98',
              },
            ]}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDA',
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
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    marginTop: 50,
    width: 140,
    height: 140,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
export default HomepageVolunteer;
