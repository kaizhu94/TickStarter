import React from 'react'
import { Link } from 'react-router-dom' 
class  Project extends React.Component{

    render(){
        const { project } = this.props;
        return (
            <div className='project-block'>
                <img id="posture" src={project.title_image} ></img>
                <h1 id='project-header'>{project.project_name}</h1>
                <p id='feature-subtitle'>{project.subtitle}</p>
                <p id='feature-founder'>{`By ${project.founder.username}`}</p>
            </div>
        )
    }

}

export default Project;