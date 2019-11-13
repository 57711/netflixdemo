import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../action';

export default (WrappedComponent, listName, buttonName) => {
    
    return class extends React.Component{
        state = {onHover: null};
        
        componentDidMount(){
            this.props.fetchData(listName);
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
                                {this.state.onHover===item.id?<button className="tiny ui button" onClick={()=>this.props.removeMyList(item)}>{buttonName}</button>:''}
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
                <WrappedComponent >
            )
        }
    
    }
    
}