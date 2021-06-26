import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import database from "../config/fireBaseConfig";
import Request from "./requestItem"
import { useSelector } from "react-redux";


export default function ViewPage() {
  const [findingReq, setfindingReq] = useState([]);
  const [ready, setready] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchData() {
      let list = [];
      await database.ref("medRequest")
        .get()
        .then((snapshot) => { snapshot.forEach((child) => { list.push({ childKey: child.key, childObj: child.val() }) }) })
      if (currentUser.selected == "Club Member"){
        let myMedRequest = [];
        for (i in list){
          console.log("item email : == > " , list[i]);
          if (list[i].childObj.user_email == currentUser.email){
            myMedRequest.push(list[i])
          }
        }
        setfindingReq(myMedRequest);
      }
      else {
        setfindingReq(list);
      }
      //snapshot.toJSON().then((data)=>{console.log("data ===> " ,data ); setfindingReq(data);})
      setready(true);
      console.log("list === ", list);
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