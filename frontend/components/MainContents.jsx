import React from 'react';
import { Link } from 'react-router-dom'


import ProjectIndex from './project/ProjectsIndex'
import SectionBar from './section_bar/SectionBar'
import FreshSection from './FreshSection'
import TakingOffSection from './TakingOffSection'
import Tabs from './project/Tabs'


import FeatureProject from './project/FeaturePorject'

class MainContents extends React.Component{
    constructor(props){
        super(props);   
    }

    componentDidMount(){
        this.props.fetchProjects();
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        return array
    }

    render(){
        if(!this.props.publishedProjects){
            return null;
        }
        const { currentUser, publishedProjects} = this.props;
        let tab;
        if(currentUser){
            tab = <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki" id='WIKI-link'>WIKI News</a>
        }else{
            tab = <Link to='/signup' id='signup'>Signup For TickStarter</Link>
        }
        const projectArray = Object.values(publishedProjects);
        const featured = projectArray[Math.floor(Math.random() * projectArray.length)];
        
        
        const randomProjects = this.shuffle(projectArray).slice(0,9);
        const freshProjects = this.shuffle(projectArray).slice(0,9);
        const offProjects = this.shuffle(projectArray).slice(0,9);
        const listOne = randomProjects.slice(0,3);
        const listTwo = randomProjects.slice(3,6);
        const listThree = randomProjects.slice(6,9);
        

        const pages = [
            {pageNumber: '1', content: <ProjectIndex projects = {listOne}/>},
            {pageNumber: '2', content: <ProjectIndex projects = {listTwo}/>},
            {pageNumber: '3', content: <ProjectIndex projects = {listThree}/>}
          ];
        return (
            <div className='main'>
                <SectionBar/>
                <div className='main-project-section'>
                    <div className='main-projects-container'>
                        <div className='featured-project-block'>
                            <h3>FEATURED PROJECT</h3>
                            <FeatureProject project={featured}/>
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
                            <FreshSection projects = {freshProjects}/>
                        </div>
                    </div>
                </div>
                <div className= 'addition-section2'>
                        <div className='takingoff-block'>
                            <div className='project-list2'>
                                <h3>TAKING OFF</h3>
                                <TakingOffSection projects={offProjects}/>
                            </div>
                        </div>
                </div>

            </div>
        )
    }
}

export default MainContents;