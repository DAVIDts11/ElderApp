import React ,{useState ,useEffect} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

const Request = (props) => {
    const { currentUser } = useSelector((state) => state.user);

    const [date, setDate]=useState();
        useEffect(() => {       
        setDate(new Date(props.req.childObj.date)); 
        console.log("dat  == ", String(date));
        return () => { }
    }, [])

    console.log("req props === > ", props.req)
    function onprs() { }
    
    return (
        <TouchableOpacity onPress={onprs}>
            <View style={styles.contener}>
                <View>
                    <Text>{props.req.childObj.name}</Text>
                    <Text>{props.req.childObj.amount} </Text>
                    <Text> {String(date)} </Text>
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
