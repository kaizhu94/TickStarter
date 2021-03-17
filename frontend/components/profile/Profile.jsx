import React from 'react'

import LogOutButton from '../buttons/LogOutButton'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDropdown:false
        }
        this.triggerOrNot = this.triggerOrNot.bind(this);
        this.handleLogOut =this.handleLogOut.bind(this);
    }

    componentDidMount(){
        debugger
        this.props.fetchProjects(this.props.currentUser.id)
    }

    triggerOrNot(e){
        // e.preventDefault();
        let newState = !this.state.showDropdown;
        this.setState({showDropdown: newState})
    }
    
    handleLogOut(e){
        e.preventDefault();
        this.props.logout();
    }



    render(){
        return (
            <div className='profile'>
               
                <button  onFocus={this.triggerOrNot} onBlur={this.triggerOrNot} id='profile-button'>
                    <img id="earth" src={window.earth} ></img>
                {
                    this.state.showDropdown
                        ? (
                            <div className='profile-dropdown'>
                                <div className='profile-top'>
                                    <div className = 'created-projects'>
                                        
                                    </div>
                                </div>
                                <div className='logout-block'>
                                    <p onClick={this.handleLogOut} id='logout'>Log out</p>

                                </div>
                               
                                    
                                
                            </div>
                    )
                    : (
                    null
                    )
                }
                </button>
            </div>
        )
    }
}

export default Profile;