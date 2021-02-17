import { connect } from 'react-redux';

import {fetchProject} from '../../actions/project_actions'
import ProjectDashboard from './ProjectDashboard'


const msp = (state, ownprops) =>{
    return ({
        user: state.entities.users[state.session.id],
        project: state.entities.projects[ownprops.match.params.projectId]
    })
}


const mdp = (dispatch) => {
    return {
      receiveProject: projectId => dispatch(fetchProject(projectId)),
    };
  }

export default connect(msp, mdp)(ProjectDashboard)