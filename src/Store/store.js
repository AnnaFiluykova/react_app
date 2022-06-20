import { combineReducers, createStore } from 'redux';

import AuthReducer from '../Reducers/auth';
import ProfileReducer from '../Reducers/profile';

const reducer = combineReducers({ auth: AuthReducer, profile: ProfileReducer });

const store = createStore(reducer);

export default store;
