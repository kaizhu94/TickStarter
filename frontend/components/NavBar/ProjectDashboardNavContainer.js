import { connect } from 'react-redux';
import { logout } from '../../actions/session_action'
import ProjectDashboardNavBar from './ProjectDashboardNavBar'
const msp = state =>{
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch=>{
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(msp, mdp)(ProjectDashboardNavBar)