import React from 'react';
import { Link } from 'react-router-dom'

import Project from './project/Project'
import ProjectIndex from './project/ProjectsIndex'
import SectionBar from './section_bar/SectionBar'
import FreshSection from './FreshSection'
import TakingOffSection from './TakingOffSection'
import Tabs from './project/Tabs'
import SampleIndex from './project/SampleIndex'
class MainContents extends React.Component{
    constructor(props){
        super(props);   
    }

    componentDidMount(){
        // this.props.fetchProjects();
    }

    render(){
        let tab;
        if(this.props.currentUser){
            tab = <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki" id='WIKI-link'>WIKI News</a>
        }else{
            tab = <Link to='/signup' id='signup'>Signup For TickStarter</Link>
        }
        const pages = [
            {pageNumber: '1', content: <ProjectIndex/>},
            {pageNumber: '2', content: <SampleIndex/>},
            {pageNumber: '3', content: <ProjectIndex/>}
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
                    <h1>Discover the best and brightest projects on Tickstarter.</h1>
                    <p>Welcome to Tickstarter</p>
                    {tab}
                </div>
                <div className= 'addition-section1'>
                    <div className='fresh-block'>
                        <div className='project-list'>
                            <h3>FRESH FAVORITES</h3>
                            <FreshSection/>
                        </div>
                    </div>
                </div>
                <div className= 'addition-section2'>
                        <div className='takingoff-block'>
                            <div className='project-list2'>
                                <h3>TAKING OFF</h3>
                                <TakingOffSection/>
                            </div>
                        </div>
                </div>

            </div>
        )
    }
}

export default MainContents;