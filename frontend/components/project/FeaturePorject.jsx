import React from 'react'
import { withRouter } from 'react-router-dom'

class FeatureProject extends React.Component{
    redirect(projectId){
        this.props.history.push(`/projects/${projectId}`);
    }
    render(){
        const { project } = this.props;
        return (
            <div className='project-block' onClick={()=>this.redirect(project.id)}>
                <img id="posture" src={project.title_image} ></img>
                <h1 id='project-header'>{project.project_name}</h1>
                <p id='feature-subtitle'>{project.subtitle}</p>
                <p id='feature-founder'>{`By ${project.founder.username}`}</p>
            </div>
        )
    }

}

export default withRouter(FeatureProject);