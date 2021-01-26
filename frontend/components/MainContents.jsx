import React from 'react';
import { Link } from 'react-router-dom'

import Project from './project/Project'
import ProjectIndex from './project/ProjectsIndex'
import SectionBar from './section_bar/SectionBar'
import FreshSection from './FreshSection'
import TakingOffSection from './TakingOffSection'
import Tabs from './project/Tabs'

class MainContents extends React.Component{
    constructor(props){
        super(props);   
    }

    
    render(){
        let tab;
        if(this.props.currentUser){
            tab = <Link to='/' id='signup'>Subscribe</Link>
        }else{
            tab = <Link to='/signup' id='signup'>Signup</Link>
        }
        const pages = [
            {pageNumber: '<', content: <ProjectIndex/>},
            {pageNumber: '1', content: <ProjectIndex/>},
            {pageNumber: '2', content: <p>hi</p>},
            {pageNumber: '3', content: <ProjectIndex/>},
            {pageNumber: '>', content: <ProjectIndex/>}
          ];
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
                            <Tabs pages={pages} />
                        </div>
                    </div>
                </div>
                <div className='signup-section'>
                    <h1>Discover the best and brightest projects on Kickstarter.</h1>
                    <p>Sign up to receive our weekly Projects We Love newsletter.</p>
                    {tab}
                </div>
                <div className= 'addition-section1'>
                    <div className='fresh-block'>
                        <h3>FRESH FAVORITES</h3>
                        <FreshSection/>
                    </div>
                </div>
                <div className= 'addition-section2'>
                        <div className='takingoff-block'>
                            <h3>TAKING OFF</h3>
                            <TakingOffSection/>
                        </div>
                </div>

            </div>
        )
    }
}

export default MainContents;