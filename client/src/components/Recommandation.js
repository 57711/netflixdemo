import React from 'react';
import { connect } from 'react-redux';
import { fetchData, addMyList } from '../action';
import RenderList from './RenderList';


class recommendation extends React.Component {
    state = {onHover: null};
    componentDidMount(){
        this.props.fetchData("recommendations");
    }
    
    render(){
        return(
            <>
                <h3>Recommendation</h3>
                <div className="ui grid">
                    <RenderList 
                    data={this.props.data}
                    currentId={this.state.onHover}
                    changeState={(value)=>this.setState({onHover: value})}
                    clickHandler={this.props.addMyList}
                    buttonText="Add"
                    />
                </div> 
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {data: state.recommend}
}
export default connect(mapStateToProps,{fetchData,addMyList})(recommendation);