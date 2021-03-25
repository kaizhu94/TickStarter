import React from 'react';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.receiveProjects()
    }
   

    redirect(){
        this.props.history.push({pathname:`/projects/${this.props.match.params.projectId}/backing`, 
                    from: this.props.location.pathname});
    }

    render(){
        
        if(!this.props.projects){
            return null;
        }else{
            const{ projects } = this.props;
            const project = projects[this.props.match.params.projectId];
            
            const date = new Date(project.end_date);
            const currentDate = new Date();
            let dayDiff =Math.round((date.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
            if (dayDiff < 1){
                dayDiff = Math.round((date.getTime() - currentDate.getTime()).getHours());
            }
            let progress = 0;
            if(project.goal){
                progress = project.pledge / project.goal * 100
            }
            const isFulfill = progress >= 100 ? '-fulfill': '';
            return(
                <div className='project-show-block'>
                    <div className='project-show-container'>
                        <div className='project-show-upper'>
                            <h1>{project.project_name}</h1>
                            <p>{project.description}</p>
                        </div>
                        <div className='project-show-lower'>
                            <img src={project.title_image} alt="title-image"/>
                            <div className='project-show-lower-right'>
                                <div className='right-section'>
                                    <div className = 'progress-bar-base'>
                                        <div className = 'progress-bar' style={{flexBasis: `${progress}%`}}></div>
                                    </div>
                                </div>
                                <div className='right-section'>
                                    <h1 id={`pledge-amount${isFulfill}`}>${project.pledge}</h1>
                                    <p>pledge of ${project.goal} goal</p>
                                </div>
                                <div className='right-section'>
                                    <h1>{project.backers}</h1>
                                    <p>backers</p>
                                </div>
                                <div className='right-section'>
                                    <h1>{dayDiff}</h1>
                                    <p>days to go</p>
                                </div>
                                <div className='right-section'>
                                    <button id='back-button' onClick={() => this.redirect()}>Back this project</button>
                                </div>
                                <div className='right-section'>
                                    <p>All or nothing. This project will only be funded if it reaches its goal by {`${date}`}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ProjectShow;