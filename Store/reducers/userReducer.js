import {LOGIN} from '../actions/userAction';

const initState = {currentUser: null};


export default function reducer(state = initState, action){
    if (action.type == LOGIN ) {
        return {currentUser: action.payload.user}
    }
    else return state;

}