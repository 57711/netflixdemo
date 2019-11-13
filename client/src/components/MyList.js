import React from 'react';
import { connect } from 'react-redux';
import { fetchData, removeMyList } from '../action';
import RenderList from './RenderList';

class MyList extends React.Component {
    state = {onHover: null};
    componentDidMount(){
        this.props.fetchData("mylist");
    }

    render(){
        return(
            <>
                <h3 className="first">My List</h3>
                <div className="ui grid">
                    <RenderList 
                    data={this.props.data} 
                    currentId={this.state.onHover} 
                    buttonText="Remove"
                    changeState={(value)=>this.setState({onHover: value})} 
                    clickHandler={this.props.removeMyList} />
                </div>                               
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {data:state.mylist}
}
export default connect(mapStateToProps,{fetchData,removeMyList})(MyList);