import React from 'react'
import { Link } from 'react-router-dom'

import Profile from './profile/Profile'

class NavBar extends React.Component{
    render(){
        let logOrProfile;
        if(this.props.currentUser){
            logOrProfile = <Profile logout={this.props.logout}/>
            
        }else{
            logOrProfile = <Link to='/login' >Log in</Link>
        }
        return (
            <div className = 'navbar'>
                {logOrProfile}
            </div>
        )
    }
}

export default NavBar;