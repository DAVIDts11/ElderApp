import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput ,Button} from 'react-native';
import database from "../config/fireBaseConfig";
import { useDispatch, useSelector } from "react-redux";


const overMedicationForm = ({ navigation }) => {
    const { currentUser } = useSelector(state => state.user);
    console.log("current user = " ,currentUser );
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [Information,setInformation] = useState("");


    return (
        <View style={styles.contener}>
            <Text> m form </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Medication Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter Anount"
                value={amount}
                onChangeText={(text) => setAmount(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="some other information"
                value={Information}
                onChangeText={(text) => setInformation(text)}
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


export default overMedicationForm;
