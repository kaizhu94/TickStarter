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
               
                <button  onFocus={this.triggerOrNot} onBlur={this.triggerOrNot}>
                    profile
                {
                    this.state.showDropdown
                        ? (
                            <div className='profile-dropdown'>
                                <p onClick={this.handleLogOut} id='logout'>Log out</p>
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