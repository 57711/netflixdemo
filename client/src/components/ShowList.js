import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ShowList = props => {
    const [onHover, changeHover] = useState(null);  

    const renderList = () => {
        if(Array.isArray(props.data) === true){
            return props.data.map(item => {
                return (
                    <div className="ui three wide column" 
                    key={item.id} 
                    onMouseOver={()=>changeHover(item.id)}
                    onMouseOut={()=>changeHover(null)}>
                        <img className="ui medium image" alt="" src={item.img} />
                        <div onMouseOut={(event)=> event.stopPropagation()}>{item.title}</div>
                        <div style={{height:30+'px'}} 
                        onMouseOut={(event)=> event.stopPropagation()}>
                            {onHover===item.id&&
                            <button 
                            className="tiny ui inverted primary fluid button " 
                            onClick={()=>props.clickHandler(item)}>
                                {props.buttonText}
                            </button>}
                        </div>
                    </div>
                )
            });
        }else{
            return <div>loading...</div>
        }                
    }

    return(
        <div>
            <h3 className="first">{props.title}</h3>
            <div className="ui grid">
                {renderList()}
            </div>                               
        </div>
    )
    
}

ShowList.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]).isRequired,
    title: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}
export default ShowList;