import { SET_AUTH } from '../Store/action-types';

const initialState = { token: '', isAuth: false };

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}
