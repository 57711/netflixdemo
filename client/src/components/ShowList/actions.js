import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD_LIST,
  ADD_LIST_SUCCESS,
  ADD_LIST_ERROR,
  REMOVE_LIST,
  REMOVE_LIST_SUCCESS,
  REMOVE_LIST_ERROR,
} from './constants';

export const fetchData = list => {
  return {
    type: FETCH_DATA,
    list,
  }
}

export const fetchDataSuccess = (data, list) => {
  return {
    type: FETCH_DATA_SUCCESS,
    data,
    list,
  }
}

export const fetchDataError = error => {
  return {
    type: FETCH_DATA_ERROR,
    error,
  }
}

export const addMyList = item => {
  return {
    type: ADD_LIST,
    item,
  }
}

export const addMyListSuccess = (item) => {
  return {
    type: ADD_LIST_SUCCESS,
    item,
  }
}

export const addMyListError = error => {
  return {
    type: ADD_LIST_ERROR,
    error,
  }
}

export const removeMyList = item => {
  return {
    type: REMOVE_LIST,
    item,
  }
}

export const removeMyListSuccess = (item) => {
  return {
    type: REMOVE_LIST_SUCCESS,
    item, 
  }
}

export const removeMyListError = error => {
  return {
    type: REMOVE_LIST_ERROR,
    error,
  }
}
