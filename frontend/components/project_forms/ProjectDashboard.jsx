import React from 'react'
import {Link} from 'react-router-dom'
class ProjectDashboard extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.receiveProject(this.props.match.params.projectId)
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
                                        <Link to="/projects/:projectId/basics">Basics</Link>
                                        <p>Name your project, upload an image, and estalish your campaign deatails.</p>  
                                    </li>
                                    <li>
                                        <Link to="/projects/:projectId/funding">Funding</Link>  
                                        <p>Setyour financial goals</p>
                                    </li>
                                    <li>
                                        <Link to="/projects/:projectId/rewards">Rewards</Link>  
                                        <p>Set your rewards</p>
                                    </li>
                                    <li>
                                        <Link to="/projects/:projectId/story">Story</Link>  
                                        <p>Add a detailed project description</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default ProjectDashboard;