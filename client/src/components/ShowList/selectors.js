import get from 'lodash/get';
import { createSelector } from 'reselect';
export const getShowList = (state, props) => {
  return get(state, 'showListReducer', {}) || {};
};
export const getTitle = (state, props) => {
  return props.title.replace(" ","").toLowerCase();
} 

export const getData = createSelector(
  getShowList,
  getTitle,
  (shouListData, title) => {
    const result = shouListData.getIn([title, 'listData']);
    return result;
  }
);

