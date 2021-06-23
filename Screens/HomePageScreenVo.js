import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";


const HomepageVolunteer = ({ navigation }) => {
    const { currentUser } = useSelector(state => state.user);
    console.log("store user = ", currentUser);
    const onPress = () => console.log("pressed");

    return (
        <View style={styles.contener} >
            <Text> Hello volunteer,  {currentUser.email}  !!!</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: "peachpuff",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
    row: {
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        display: "flex",
        marginTop: 15,
        height: 140,
        width: 140,
        backgroundColor: "red"
    }

});

export default HomepageVolunteer;