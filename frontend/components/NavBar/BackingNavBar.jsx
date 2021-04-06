import React from 'react';
import { Link } from 'react-router-dom'

class BackingNavBar extends React.Component{
    render(){
        return (
            <div className = 'backing-navbar'>
                <nav className='backing-nav'>
                    <Link to='/' id='tickstart-link'>TickStarter</Link>
                </nav>
            </div>
        )
    }
}

export default BackingNavBar;