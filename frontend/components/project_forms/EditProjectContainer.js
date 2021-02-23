import { connect } from 'react-redux';
import {fetchLocations} from '../../actions/location_actions'
import {fetchCategories } from '../../actions/category_actions'
import {fetchProject} from '../../actions/project_actions'

import EditProjectForm from './EditProjectForm'

const msp = (state, ownprops) =>{
    debugger
    return ({
        founderId: state.session.id,
        locations: state.entities.locations,
        maincategories: state.entities.categories.maincategories,
        project: state.entities.projects[ownprops.match.params.projectId]
    })
}

const mdp = dispatch=>{
    return ({
        receiveLocations: ()=>dispatch(fetchLocations()),
        receiveCategories: ()=> dispatch(fetchCategories()),
        receiveProject: projectId => dispatch(fetchProject(projectId))
    })
}
export default connect(msp, mdp)(EditProjectForm);
