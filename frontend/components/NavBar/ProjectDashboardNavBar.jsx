import React from 'react'
import { Link } from 'react-router-dom'

import Profile from '../profile/Profile'

class ProjectDashboardNavBar extends React.Component{
   
    render(){
        let logOrProfile;
        if(this.props.currentUser){
            logOrProfile = <Profile logout={this.props.logout}
                                    fetchProjects={this.props.fetchProjects}
                                    currentUser={this.props.currentUser}
                                    createdProjects={this.props.createdProjects}/>
            
        }else{
            logOrProfile = <div id='login-or-demo'>
                <Link to='/login' id='login'>Log in</Link>
            </div>
        }
        return (
            <div className = 'navbar'>
                <nav className='left-nav'>
                    <div>
                       {null}
                    </div>
                </nav>
                
                <nav className='mid-nav'>
                    <Link to='/' id='tickstart-link'>TickStarter</Link>
                </nav>
                
                <nav className='right-nav'>
                    {logOrProfile}
                </nav>
            </div>
        )
    }
}

export default ProjectDashboardNavBar;