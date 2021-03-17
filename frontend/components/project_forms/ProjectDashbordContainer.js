import { connect } from 'react-redux';

import {fetchProject, deleteProject, fetchProjects} from '../../actions/project_actions'
import ProjectDashboard from './ProjectDashboard'


const msp = (state, ownprops) =>{
    // debugger
    return ({
        user: state.entities.users[state.session.id],
        projects: state.entities.projects.owner_projects
    })
}


const mdp = (dispatch) => {
    return {
      receiveProjects: () => dispatch(fetchProjects()),
      deleteProject: projectId => dispatch(deleteProject(projectId)),
    };
  }

export default connect(msp, mdp)(ProjectDashboard)