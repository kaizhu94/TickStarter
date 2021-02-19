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
        debugger
        const {project} = this.props
        return(
            <div class = 'edit-navbar'>
                 <Link to='/' id='tickstart-link'>TickStarter</Link>
                 <Link to={`/projects/${project.id}/dashboard`} id='dashboard-link'>← {project.category_name}</Link>
            </div>
        )
    }

}

export default EditProfileNavBar;