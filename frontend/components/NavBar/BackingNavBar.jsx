import React from 'react';
import { Link } from 'react-router-dom'

class BackingNavBar extends React.Component{
    
    render(){
        return (
            <div className = 'backing-navbar'>
                 <Link to='/' id='tickstart-link'>TickStarter</Link>
            </div>
        )
    }
}

export default BackingNavBar;