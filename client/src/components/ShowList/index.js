import ShowList from './ShowList';
import { connect } from "react-redux";
import {
  fetchData,
  addMyList,
  removeMyList,
} from './actions';
import { getData } from './selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    data: getData(state, ownProps),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: (list) => dispatch(fetchData(list)),
    addMyList: (item) => dispatch(addMyList(item)),
    removeMyList: (item) => dispatch(removeMyList(item)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowList);