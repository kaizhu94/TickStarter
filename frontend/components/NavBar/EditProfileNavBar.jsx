import React from 'react'
import { Link } from 'react-router-dom'

class EditProfileNavBar extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.receiveProject(this.props.match.params.projectId)
    }

    render(){
        if(!this.props.project){
            return null
        }
        const {project} = this.props
        return(
            <div className = 'edit-navbar'>
                 <Link to='/' id='tickstart-link'>TickStarter</Link>
                 <Link to={`/projects/${project.id}/dashboard`} id='dashboard-link'>← {project.project_name ? project.project_name  : project.category_name}</Link>
            </div>
        )
    }

}

export default EditProfileNavBar;