import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import api from '../../api/fetchData'; 
import {
  FETCH_DATA,
  ADD_LIST,
  REMOVE_LIST,
} from './constants';
import {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
  addMyListError,
  removeMyListError,
} from './actions';

function* fetchDataSaga({ type, list }){
  try{
    const result = yield call(api.get, `/${list}`);
    yield put(fetchDataSuccess(result.data, list));
  }catch (error) {
    yield put(fetchDataError(error));
  }
}

function* removeMyListSaga({type, item}){
  try{
    yield call(api.post, '/recommendations', item);
    yield call(api.delete, `/mylist/${item.id}`);
    yield put(fetchData('mylist'));
    yield put(fetchData('recommendations'));
  }catch (error) {
    yield put(removeMyListError(error));
  }
}

function* addMyListSaga({type, item}){
  try{
    yield call(api.post, '/mylist', item);
    yield call(api.delete, `/recommendations/${item.id}`);
    yield put(fetchData('mylist'));
    yield put(fetchData('recommendations'));
  }catch (error) {
    yield put(addMyListError(error));
  }
}

function* showListSagas() {
  yield takeEvery(FETCH_DATA, fetchDataSaga);
  yield takeLatest(ADD_LIST, addMyListSaga);
  yield takeLatest(REMOVE_LIST, removeMyListSaga);
}

export default showListSagas;