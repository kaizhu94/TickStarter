import React from 'react'
import {Link} from 'react-router-dom'
class ProjectDashboard extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        debugger
        this.props.receiveProjects()
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteProject(this.props.match.params.projectId).then(()=> this.props.history.push('/'));
    }

    redirect(tab){
        this.props.history.push(`/projects/${this.props.match.params.projectId}/edit/${tab}`);
    }

    render(){
        debugger
        if(!this.props.projects){
            return null
        }
        const {user} = this.props;
        const project = this.props.projects[this.props.match.params.projectId];
        return (
            <div className = 'dashboard-main'>
                <div className = 'dashboard-head'>
                        {project.project_name? (
                                <h1>{project.project_name}</h1>
                            ):(
                                <h1>{`${project.category_name} Project`}</h1>
                            )}
                        <p>By {user.username}</p>
                </div>
                <div className = 'dashboard-body'>
                        <div className='body-block'>
                            <h1>Project overview</h1>
                            <div className='editform-links'>
                                <ul>
                                    <li onClick={() => this.redirect(0)}>
                                        <Link to={`/projects/${project.id}/edit/0`}>Basics</Link>
                                        <p>Name your project, upload an image, and estalish your campaign deatails.</p>  
                                    </li>
                                    <li onClick={() => this.redirect(1)}>
                                        <Link to={`/projects/${project.id}/edit/1`}>Funding</Link>  
                                        <p>Setyour financial goals</p>
                                    </li>
                                    <li onClick={() => this.redirect(2)}>
                                        <Link to={`/projects/${project.id}/edit/2`}>Rewards</Link>  
                                        <p>Set your rewards</p>
                                    </li>
                                    <li onClick={() => this.redirect(3)}>
                                        <Link to={`/projects/${project.id}/edit/3`}>Story</Link>  
                                        <p>Add a detailed project description</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className='delete-project'>
                    <div className='delete-block'>
                        <i className="fas fa-trash" onClick={this.handleDelete}> <span>Delete Project</span> </i>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDashboard;