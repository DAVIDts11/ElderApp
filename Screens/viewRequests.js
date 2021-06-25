import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import database from "../config/fireBaseConfig";
import Request from "./requestItem"


export default function ViewPage() {
  const [findingReq, setfindingReq] = useState([]);
  const [ready, setready] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let list = [];
      await database.ref("medRequest")
        .get()
        .then((snapshot) => { snapshot.forEach((child) => { list.push({ childKey: child.key, childObj: child.val() }) }) })

      //snapshot.toJSON().then((data)=>{console.log("data ===> " ,data ); setfindingReq(data);})
      setfindingReq(list);
      setready(true);
      console.log("list === ", list);
      console.log("  !!!!  list  Item  === ", list[0].childObj.name);


    }
    fetchData();


    return () => {
      // cleanup
    }
  }, [])

  return (
    <View style={styles.contener}>

      <Text>list requests </Text>
      <FlatList style={styles.flatListReq}
        ListEmptyComponent={ready ? <ActivityIndicator size="large" color="blue" /> : <Text>No Results</Text>}
        data={findingReq}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Request req={item} />} />

    </View>
  )
}


const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  flatListReq: {
    flex: 1
  }

})