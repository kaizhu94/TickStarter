import React from 'react';
import { Link } from 'react-router-dom'

import Project from './project/Project'
import ProjectIndex from './project/ProjectsIndex'
import SectionBar from './section_bar/SectionBar'

class MainContents extends React.Component{
    constructor(props){
        super(props)
        
    }

    
    render(){
        // debugger
        let tab;
        if(this.props.currentUser){
            tab = <Link to='/' id='signup'>Subscribe</Link>
        }else{
            tab = <Link to='/signup' id='signup'>Signup</Link>
        }
        // if(this.props.isLoggedIn !== true){
        //     tab = <Link to='/signup' id='signup'>Signup</Link>
        // }else{
        //     tab = <Link to='/' id='signup'>Subscribe</Link>
        // }
        return (
            <div className='main'>
                <SectionBar/>
                <div className='main-project-section'>
                    <div className='main-projects-container'>
                        <div className='featured-project-block'>
                            <h3>FEATURED PROJECT</h3>
                            <Project />
                        </div>
                        <div className = 'recommand-projects-block'>
                            <h3>RECOMMENDED FOR YOU</h3>
                            <ProjectIndex/>
                        </div>
                    </div>
                </div>
                <div className='signup-section'>
                    <h1>Discover the best and brightest projects on Kickstarter.</h1>
                    <p>Sign up to receive our weekly Projects We Love newsletter.</p>
                    {tab}
                </div>
            </div>
        )
    }
}

export default MainContents;