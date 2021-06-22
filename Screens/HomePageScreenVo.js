import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";


const HomepageVolunteer = () => {
    const { currentUser } = useSelector(state => state.user);
    console.log("store user = ",currentUser );
  
    return (
        <View>
            <Text> Hello volunteer,  {currentUser.email}  !!!</Text>
        </View>
    )
}

export default HomepageVolunteer;
