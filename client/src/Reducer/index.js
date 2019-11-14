import { combineReducers } from 'redux';
import myListReducer from './myListReducer';
import recommendRecuder from './recommendReducer';

export default combineReducers({
    mylist: myListReducer,
    recommendations: recommendRecuder
})