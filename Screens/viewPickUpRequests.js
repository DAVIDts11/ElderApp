import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, StatusBar } from 'react-native';
import database from '../config/fireBaseConfig';
import RequestPickUp from './requestPickUp';
import { useSelector } from 'react-redux';

export default function ViewPickUp() {
  const [findingReq, setfindingReq] = useState([]);
  const [ready, setready] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchData() {
      const list = [];
      await database
        .ref('pickMeUpRequest')
        .get()
        .then((snapshot) => {
          snapshot.forEach((child) => {
            list.push({ childKey: child.key, childObj: child.val(), reqType: 'medReq' });
          });
        });

      if (currentUser.selected === 'Club Member') {
        const myPickupRequest = [];
        for (const i in list) {
          if (list[i].childObj.user_email === currentUser.email) {
            myPickupRequest.push(list[i]);
          }
        }
        setfindingReq(myPickupRequest);
      } else {
        setfindingReq(list);
      }
      setready(true);
    }
    fetchData();

    return () => {
      // cleanup
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Requests</Text>
      </View>

      <View style={styles.footer}>
        <FlatList
          ListEmptyComponent={
            ready ? <ActivityIndicator size="large" color="blue" /> : <Text>No Results</Text>
          }
          data={findingReq}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <RequestPickUp req={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0CFEF',
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
});
