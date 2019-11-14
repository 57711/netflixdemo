import React from 'react';
import './App.css';
import Header from './components/Header';
import ShowList from './components/ShowList';

import { connect } from 'react-redux';
import { fetchData, removeMyList, addMyList } from './action';

class App extends React.Component {  
  componentDidMount(){
    this.props.fetchData('mylist');
    this.props.fetchData('recommendations');
  }
  
  render(){
    return (
      <div className="ui container">
        <Header />
        <ShowList 
        title="My List" 
        data={this.props.mylist}
        clickHandler={this.props.removeMyList}
        buttonText="Remove"
        />
        <ShowList 
        title="Recommendations" 
        data={this.props.recommend}
        clickHandler={this.props.addMyList}
        buttonText="Add" />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    recommend: state.recommend
  }
}
export default connect(mapStateToProps,{fetchData, removeMyList, addMyList})(App);
