import { connect } from 'react-redux';
import {fetchLocations} from '../../actions/location_actions'
import {fetchCategories } from '../../actions/category_actions'
import { fetchProject, updateProject} from '../../actions/project_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

import EditProjectForm from './EditProjectForm'

const msp = (state, ownprops) =>{
    // debugger
    return ({
        founderId: state.session.id,
        locations: state.entities.locations,
        maincategories: state.entities.categories.maincategories,
        subcategories: state.entities.categories.subcategories,
        project: state.entities.projects[ownprops.match.params.projectId],
        tabId: ownprops.match.params.id
    })
}

const mdp = dispatch=>{
    return ({
        receiveLocations: ()=>dispatch(fetchLocations()),
        receiveCategories: ()=> dispatch(fetchCategories()),
        updateProject: (project) => dispatch(updateProject(project)),
        receiveProject: projectId => dispatch(fetchProject(projectId)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    })
}
export default connect(msp, mdp)(EditProjectForm);
