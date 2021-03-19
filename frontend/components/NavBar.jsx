import React from 'react'
import { Link } from 'react-router-dom'

import Profile from '../components/profile/Profile';
import SearchBar from '../components/NavBar/SearchBar';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showSearch:false
        }
        this.updateShowSearch=this.updateShowSearch.bind(this);
    }
    updateShowSearch(){
        this.setState({
            'showSearch': !this.state.showSearch
        })
    }
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
            
                this.state.showSearch?(
                    <SearchBar updateShowSearch={this.updateShowSearch}
                                searchProjects = {this.props.searchProjects}/>
                ):(
                    <div className = 'navbar'>
                        <nav className='left-nav'>
                            <div>
                                <p id='discover'>Discover</p>
                                <p id='start-project'><Link to='/projects/new' id='start-a-project'> Start a project</Link> </p>
                            </div>
                        </nav>
                        <nav className='mid-nav'>
                            <Link to='/' id='tickstart-link'>TickStarter</Link>
                        </nav>
                        
                        <nav className='right-nav'>
                            <p id="search" onClick={()=>this.updateShowSearch()}>Search
                            <img id="search" src={window.search} ></img>
                            </p>
                            {logOrProfile}
                        </nav>
                        
                    </div>

                )
            
        )
    }
}

export default NavBar;