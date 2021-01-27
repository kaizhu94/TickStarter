import React from 'react'
import { Link } from 'react-router-dom'
class NewProjectNavBar extends React.Component{
    render(){
        // debugger
        return (
            <div className = 'new-pro-form-header'>
                <div className = 'new-pro-header-link'>
                    <Link to='/' id='tickstart-link'>TickStarter</Link>
                </div>
            </div>
        )
    }
}

export default NewProjectNavBar;