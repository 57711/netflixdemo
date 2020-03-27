import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MY_LIST, RECOMMENDATIONS } from './constants';

const ShowList = props => {
  const [onHover, changeHover] = useState(null);
  const title = props.title.replace(" ","").toLowerCase();
  const clickHandler = (item) => {
    switch (title){
      case MY_LIST:
        return props.removeMyList(item);
      case RECOMMENDATIONS:
        return props.addMyList(item);
      default:
        return null;
    }
  }
  const fetchData = props.fetchData;
  useEffect(()=>{
    fetchData(title);
  }, [fetchData, title]);

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
              onClick={()=>clickHandler(item)}>
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
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  fetchData: PropTypes.func,
  addMyList: PropTypes.func,
  removeMyList: PropTypes.func,
}

export default ShowList;