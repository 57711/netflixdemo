import React from 'react';
import { connect } from 'react-redux';
import { fetchData, removeMyList } from '../action';

class MyList extends React.Component {
    state = {onHover: null};
    componentDidMount(){
        this.props.fetchData("mylist");
    }
    renderList(){
        if(Array.isArray(this.props.data) === true){
            return this.props.data.map(item => {
                return (
                    <div className="ui three wide column" 
                    key={item.id} 
                    onMouseOver={()=>this.setState({onHover: item.id})}
                    onMouseOut={()=>this.setState({onHover: null})}>
                        <img className="ui medium image" alt="" src={item.img} />
                        <span onMouseOut={(event)=> event.stopPropagation()}>{item.title}</span>
                        <div style={{height:30+'px'}} 
                        onMouseOut={(event)=> event.stopPropagation()}>
                            {this.state.onHover===item.id?<button className="tiny ui button" onClick={()=>this.props.removeMyList(item)}>Remove</button>:''}
                        </div>
                    </div>
                )
            });
        }else{
            return <div>loading...</div>
        }
                
    }

    render(){
        // console.log(this.props.data);
        // console.log(Array.isArray(this.props.data));
        return(
            <div className="ui container">
                <h3 className="first">My List</h3>
                <div className="ui grid">
                    {this.renderList()}
                </div>                               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {data:state.mylist}
}
export default connect(mapStateToProps,{fetchData,removeMyList})(MyList);