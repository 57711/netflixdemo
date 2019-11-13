import React from 'react';
import logo from '../Netflix_2015_logo.svg';

const Header = () => {
    return (
        <div className="ui massive text inverted menu">
            <div className="ui container">  
                <div className="item" style={{padding:0, width:120+'px'}}>              
                    <img style={{width: 100+'%'}} src={logo} alt="NETFLIX" />  
                </div>
            </div>
        </div>              

    )
}

export default Header;