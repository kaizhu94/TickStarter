import React from 'react'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDropdown:false
        }
        this.handleLogout=this.handleLogout.bind(this);
    }
    showDropdown(){
        // e.preventDefault();
        this.setState({
            showDropdown: true
        })
    }

    handleLogout(e){
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return (
            <div className='profile'>
                {/* <button onClick={this.handleLogout}>Log Out</button>
                 */}
                <button onClick={this.showDropdown}>
                    profile
                </button>
                {
                    this.state.showDropdown
                        ? (
                    // <div className="menu">
                    //     <button onClick={this.handleLogout}>Log Out</button>
                    // </div>
                     <p>Hi</p>
                    )
                    : (
                    <p>smt</p>
                    )
                }
            </div>
        )
    }
}

export default Profile;