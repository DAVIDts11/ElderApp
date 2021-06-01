import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, Item } from 'react-native';
import SelectPicker from 'react-native-form-select-picker';
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_ACTION } from "../Store/actions/userAction"

const Login = (props) => {
    const options = ["Club Member", "Volunteer"];

    // remove these initial assignments after testing
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selected, setSelected] = useState();

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (<View style={styles.contener}>
        <TextInput style={styles.textInput}
            placeholder='Enter username'
            value={username}
            onChangeText={(text) =>setUsername(text) }
        />
        <TextInput style={styles.textInput}
            placeholder='Enter password'
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
        />

        <SelectPicker style={styles.selector}
            onValueChange={(value) => {
                // Do anything you want with the value. 
                // For example, save in state.
                setSelected(value);
            }}
            selected={selected}
            placeholder='User Type'
        >

            {Object.values(options).map((val, index) => (
                <SelectPicker.Item label={val} value={val} key={index + 5} />
            ))}

        </SelectPicker>
        <Button style={styles.button}
            title='Sign In'
            onPress={() => {
                const User = {
                    username,
                    password,
                    selected
                };
                dispatch(LOGIN_ACTION.userLogin(User))
                console.log(`Your username is ${username} \nYour password  is ${password}\nYou are ${selected}`);
            }}
        />

    </View>);





};



const styles = StyleSheet.create({
    contener: {
        backgroundColor: "green",
    },
    textInput: {
        backgroundColor: "cornsilk",
        width: 250,
        height: 50,
        marginBottom: 30
    },
    selector: {
        backgroundColor: "cornsilk",
        width: 250,
        height: 50,
        marginBottom: 30
    },
    button: {

    }
});

export default Login;



