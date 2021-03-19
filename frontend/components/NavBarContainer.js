import { connect } from 'react-redux';
import { logout } from '../actions/session_action'
import { fetchProjects } from '../actions/project_actions'
import { searchProjects } from '../actions/search_actions'
import NavBar from './NavBar'
const msp = state =>{
    debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        createdProjects:  state.entities.projects.owner_projects
    })
}

const mdp = dispatch=>{
    return ({
        logout: () => dispatch(logout()),
        fetchProjects: () => dispatch(fetchProjects()),
        searchProjects: (searchTerm) => dispatch(searchProjects(searchTerm))
    })
}

export default connect(msp, mdp)(NavBar)