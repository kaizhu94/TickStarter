import React from 'react'
import { Link } from 'react-router-dom'
class NewProjectNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDropdown:false
        }
        this.triggerOrNot = this.triggerOrNot.bind(this);
        this.handleLogOut =this.handleLogOut.bind(this);
    }

    triggerOrNot(e){
        let newState = !this.state.showDropdown;
        this.setState({showDropdown: newState})
    }
    
    handleLogOut(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
        return (
            <div className = 'new-pro-form-header'>
                <div className = 'new-pro-header-link'>
                    <div>{null}</div>
                    <Link to='/' id='tickstart-link'>TickStarter</Link>
                    <button  onFocus={this.triggerOrNot} onBlur={this.triggerOrNot} id='new-project-button'>
                        <img id="earth" src={window.earth} ></img>
                        {
                        this.state.showDropdown ? (
                                <div className='new-project-dropdown'>                             
                                    <div className='dropdown-block'>
                                        <div className='ul-list'>
                                            <ul>
                                                <li onClick={this.handleLogOut} id='project-drop-logout'>Log out</li>            
                                            </ul>
                                        </div>

                                    </div>                        
                                </div>
                            ) : ( null )
                        }
                    </button>
                </div>
            </div>
        )
    }
}

export default NewProjectNavBar;