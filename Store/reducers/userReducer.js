import {LOGIN} from '../actions/userAction';

const initUser = {
    username:"default-name",
    password:"default-password",
    selected:"default-userType"
};
const initState = {currentUser: initUser};


export default function reducer(state = initState, action){
    if (action.type == LOGIN ) {
        return {currentUser: action.payload.user}
    }
    else return state;

}