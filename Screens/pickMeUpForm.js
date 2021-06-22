import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,Button } from 'react-native';
import database from "../config/fireBaseConfig";
import { useDispatch, useSelector } from "react-redux";

const pickMeUpForm = ({ navigation }) => {
    const { currentUser } = useSelector(state => state.user);
    console.log("current user = " ,currentUser );

    const [email, setEmail] = useState("");



    return (
        <View style={styles.contener}>
            <Text>P form</Text>
            <TextInput
                style={styles.textInput}
                placeholder="daads"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Button
                style={styles.button}
                title="Submit"
                onPress={async () => {
                    console.log("pressed");

                    navigation.navigate('HomepageMember');
                }
                } />

        </View>
    )
}


const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: "peachpuff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? 25 : 0,
    },
    textInput: {
        backgroundColor: "cornsilk",
        width: 250,
        height: 50,
        marginBottom: 30,
    },
    button:{
        
    }
})
export default pickMeUpForm;
