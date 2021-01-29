import { connect } from 'react-redux';
import {fetchLocations} from '../../actions/location_actions'
import {fetchCategories } from '../../actions/category_actions'
import {createProject} from '../../actions/project_actions'
import NewProjectForm from './NewProjectForm'
const msp = state =>{
    // debugger
    return ({
        founderId: state.session.id,
        locations: state.entities.locations,
        maincategories: state.entities.categories.maincategories,
        
    })
}

const mdp = dispatch=>{
    return ({
        receiveLocations: ()=>dispatch(fetchLocations()),
        receiveCategories: ()=> dispatch(fetchCategories()),
        createProject: (project)=>dispatch(createProject(project))
    })
}
export default connect(msp, mdp)(NewProjectForm);
