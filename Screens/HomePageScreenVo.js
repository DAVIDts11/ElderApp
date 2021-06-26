import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomepageVolunteer = ({ navigation }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log('store user = ', currentUser);

  return (
    <View style={styles.contener}>
      <Text> Hello volunteer, {currentUser.email} !!!</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ViewPage')}>
          <Text> view requests </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: 'peachpuff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    display: 'flex',
    marginTop: 15,
    height: 140,
    width: 140,
    backgroundColor: 'red',
  },
});

export default HomepageVolunteer;
