import React from 'react';
import PropTypes from 'prop-types';

const renderList = (props) => {
    if(Array.isArray(props.data) === true){
        return props.data.map(item => {
            return (
                <div className="ui three wide column" 
                key={item.id} 
                onMouseOver={()=>props.changeState(item.id)}
                onMouseOut={()=>props.changeState(null)}>
                    <img className="ui medium image" alt="" src={item.img} />
                    <div onMouseOut={(event)=> event.stopPropagation()}>{item.title}</div>
                    <div style={{height:30+'px'}} 
                    onMouseOut={(event)=> event.stopPropagation()}>
                        {props.currentId===item.id&&
                        <button 
                        className="tiny ui inverted primary fluid button " 
                        onClick={()=>props.clickHandler(item)}>
                            {[props.buttonText]}
                        </button>}
                    </div>
                </div>
            )
        });
    }else{
        return <div>loading...</div>
    }
            
}

renderList.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    currentId: PropTypes.number,
    changeState: PropTypes.func,
    clickHandler: PropTypes.func,
    buttonText: PropTypes.string
}

export default renderList;