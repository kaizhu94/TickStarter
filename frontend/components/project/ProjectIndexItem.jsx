import React from 'react'
import { withRouter } from 'react-router-dom'
class  ProjectIndexItem extends React.Component{
    redirect(projectId){
        this.props.history.push(`/projects/${projectId}`);
    }
    render(){
        if(!this.props.project){
            return null;
        }
        const { project } = this.props;
        const name = project.project_name.length > 40? project.project_name.slice(0,27)+'...' : project.project_name;
        const progress = Math.round(project.pledge / project.goal * 100);
        return (
            <div className='project-index-item-block'>
                <div className='project-index-item-intaincer'>
                    <img id="posture" src={project.title_image} onClick={()=>this.redirect(project.id)}></img>
                    
                    <div className='recom-project-info'>
                        <h1 onClick={()=>this.redirect(project.id)}>{name}</h1>
                        <p id='found-percentage'>{`${progress}% funded`}</p>
                        <p id='founder'>{`By ${project.founder.username}`}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(ProjectIndexItem);