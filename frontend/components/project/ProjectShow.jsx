import React from 'react';

class ProjectShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.receiveProject(this.props.match.params.projectId)
    }
    
    render(){
        // debugger
        if(!this.props.project){
            return null;
        }else{
            const{ project } = this.props;
            const date = new Date(project.end_date);
            debugger
            return(
                <div className='project-show-block'>
                    <div className='project-show-container'>
                        <div className='project-show-upper'>
                            <h1>{project.project_name}</h1>
                            <p>{project.description}</p>
                        </div>
                        <div className='project-show-lower'>
                            <img src={project.title_image_url} alt="title-image"/>
                            <div className='project-show-lower-right'>
                                <div className='right-section'>
                                    <h1></h1>
                                    <p>pledge of ${project.goal} goal</p>
                                </div>
                                <div className='right-section'>
                                    <h1></h1>
                                    <p>backers</p>
                                </div>
                                <div className='right-section'>
                                    <h1></h1>
                                    <p>days to go</p>
                                </div>
                                <div className='right-section'>
                                    <button id='back-button'>Back this project</button>
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