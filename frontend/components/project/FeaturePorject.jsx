import React from 'react'
import { withRouter } from 'react-router-dom'

class FeatureProject extends React.Component{
    redirect(projectId){
        this.props.history.push(`/projects/${projectId}`);
    }
    render(){
        const { project } = this.props;
        let progress = 0;
        if(project.goal){
            progress = project.pledge / project.goal * 100;
        }
        return (
            <div className='project-block' onClick={()=>this.redirect(project.id)}>
                <img id="posture" src={project.title_image} ></img>
                <div className='feature-progress'>
                    <div className = 'progress-bar-base'>
                        <div className = 'progress-bar' style={{flexBasis: `${progress}%`}}></div>
                    </div>
                </div>
                <h1 id='project-header'>{project.project_name}</h1>
                <p id='feature-subtitle'>{project.subtitle}</p>
                <p id='feature-founder'>{`By ${project.founder.username}`}</p>
            </div>
        )
    }

}

export default withRouter(FeatureProject);