import React from 'react'
import {Link} from 'react-router-dom'
class ProjectDashboard extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        this.props.receiveProject(this.props.match.params.projectId)
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteProject(this.props.match.params.projectId).then(()=> this.props.history.push('/'));
    }

    render(){
        if(!this.props.project){
            return null
        }
        const {user, project} = this.props
        return (
            <div className = 'dashboard-main'>
                <div className = 'dashboard-head'>
                        <h1>{project.category_name} Proeject</h1>
                        <p>By {user.username}</p>
                </div>
                <div className = 'dashboard-body'>
                        <div className='body-block'>
                            <h1>Project overview</h1>
                            <div className='editform-links'>
                                <ul>
                                    <li>
                                        <Link to={`/projects/${project.id}/edit/0`}>Basics</Link>
                                        <p>Name your project, upload an image, and estalish your campaign deatails.</p>  
                                    </li>
                                    <li>
                                        <Link to={`/projects/${project.id}/edit/1`}>Funding</Link>  
                                        <p>Setyour financial goals</p>
                                    </li>
                                    <li>
                                        <Link to={`/projects/${project.id}/edit/2`}>Rewards</Link>  
                                        <p>Set your rewards</p>
                                    </li>
                                    <li>
                                        <Link to={`/projects/${project.id}/edit/3`}>Story</Link>  
                                        <p>Add a detailed project description</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className='delete-project'>
                    <div className='delete-block'>
                        <i class="fas fa-trash" onClick={this.handleDelete}> <span>Delete Project</span> </i>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDashboard;