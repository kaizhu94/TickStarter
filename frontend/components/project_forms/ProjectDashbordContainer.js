import { connect } from 'react-redux';

import {fetchProject, deleteProject} from '../../actions/project_actions'
import ProjectDashboard from './ProjectDashboard'


const msp = (state, ownprops) =>{
    // debugger
    return ({
        user: state.entities.users[state.session.id],
        project: state.entities.projects[ownprops.match.params.projectId]
    })
}


const mdp = (dispatch) => {
    return {
      receiveProject: projectId => dispatch(fetchProject(projectId)),
      deleteProject: projectId => dispatch(deleteProject(projectId))
    };
  }

export default connect(msp, mdp)(ProjectDashboard)