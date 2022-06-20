import { SET_PROFILE } from '../Store/action-types';

const initialState = {
  name: '',
  lastName: '',
  age: '',
  isLoaded: false
}

export default function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE: {
      return { ...state, ...action.payload, isLoaded: true };
    }
    default: {
     return state;
    }
  }
}
