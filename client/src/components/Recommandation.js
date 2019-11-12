import React from 'react';
import { connect } from 'react-redux';
import { fetchData, addMyList } from '../action';


class recommendation extends React.Component {
    state = {onHover: null};
    componentDidMount(){
        this.props.fetchData("recommendations");
    }
    addHandler = () => {

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
                            {this.state.onHover===item.id?<button className="tiny ui button" onClick={()=>this.props.addMyList(item)}>Add</button>:''}
                        </div>
                    </div>
                )
            });
        }else{
            return <div>loading...</div>
        }
                
    }
    render(){
        return(
            <div className="ui container">
                <h3 className="first">Recommendation</h3>
                <div className="ui grid">
                    {this.renderList()}
                </div> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    //console.log(state);
    return {data: state.recommend}
}
export default connect(mapStateToProps,{fetchData,addMyList})(recommendation);