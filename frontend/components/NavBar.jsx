import React from 'react'
import { Link } from 'react-router-dom'

import Profile from './profile/Profile'
import DemoLogInContainer from './session_forms/DemoLogInContainer'

class NavBar extends React.Component{
    render(){
        let logOrProfile;
        if(this.props.currentUser){
            logOrProfile = <Profile logout={this.props.logout}/>
            
        }else{
            logOrProfile = <div id='login-or-demo'>
                <Link to='/login' id='login'>Log in</Link>
                <DemoLogInContainer/>
            </div>
        }
        return (
            <div className = 'navbar'>
                <nav className='left-nav'>
                    <div>
                        <p id='discover'>Discover</p>
                        <p id='start-project'><Link to='/learn' id='start-a-project'> Start a project</Link> </p>
                    </div>
                </nav>
                <nav className='mid-nav'>
                    <Link to='/' id='tickstart-link'>TickStarter</Link>
                </nav>
                
                <nav className='right-nav'>
                    <p>Search
                    <img id="search" src={window.search} ></img>
                    </p>
                    {logOrProfile}
                </nav>
                
            </div>
        )
    }
}

export default NavBar;