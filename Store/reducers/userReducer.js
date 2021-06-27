import { SIGNUP, LOGIN } from '../actions/userAction';

const initUser = {
  email: 'default-email',
  password: 'default-password',
  selected: 'default-userType',
};
const initState = { currentUser: initUser };

export default function reducer(state = initState, action) {
  if (action.type === SIGNUP || action.type === LOGIN) {
    return { currentUser: action.payload.user };
  }
  return state;
}
