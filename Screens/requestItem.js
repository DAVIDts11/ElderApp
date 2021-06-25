import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

const Request = (props) => {

    console.log("req props === > ", props.req)
    function onprs() { }
    return (
        <TouchableOpacity onPress={onprs}>
            <View style={styles.contener}>
                <View>
                    <Text>{props.req.childObj.name}</Text>
                    <Text>{props.req.childObj.amount} </Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    contener: {
        backgroundColor: "honeydew",
        borderWidth: 2.5,
        borderColor: "gray",
        padding: 10,
        flexDirection: 'row-reverse',
        width: "95%",
        marginTop: 10,
        fontFamily: "tahoma"
    },

})


export default Request;
