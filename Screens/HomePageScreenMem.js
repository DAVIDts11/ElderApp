import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";


const HomepageMember = () => {
    const { currentUser } = useSelector(state => state.user);
    console.log("store user = ",currentUser );
  
    return (
        <View>
            <Text>Hello member {currentUser.email}  !!</Text>
        </View>
    )
}

export default HomepageMember;