import { fromJS } from 'immutable'; 
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from './constants';

const INITIAL_STATE = fromJS({});
  
const showListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA: 
      return state.setIn([action.list, 'listName'], action.list);
    case FETCH_DATA_SUCCESS:
      return state.setIn([action.list,'listData'], action.data);
    case FETCH_DATA_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default showListReducer;