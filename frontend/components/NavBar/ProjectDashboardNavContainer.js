import { connect } from 'react-redux';
import { logout } from '../../actions/session_action'
import { fetchProjects } from '../../actions/project_actions'
import ProjectDashboardNavBar from './ProjectDashboardNavBar'
const msp = state =>{
    return ({
        currentUser: state.entities.users[state.session.id],
        createdProjects:  state.entities.projects.owner_projects
    })
}

const mdp = dispatch=>{
    return ({
        logout: () => dispatch(logout()),
        fetchProjects: () => dispatch(fetchProjects())
    })
}

export default connect(msp, mdp)(ProjectDashboardNavBar)