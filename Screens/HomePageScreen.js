import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";


const Homepage = () => {
    const { currentUser } = useSelector(state => state.user);
    console.log("store user = ",currentUser );
  
    return (
        <View>
            <Text>{currentUser.username}</Text>
        </View>
    )
}

export default Homepage;
