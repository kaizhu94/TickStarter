import { connect } from 'react-redux';
import {fetchLocations} from '../../actions/location_actions'
import {fetchCategories } from '../../actions/category_actions'

import EditProjectForm from './EditProjectForm'

const msp = state =>{
    debugger
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
    })
}
export default connect(msp, mdp)(EditProjectForm);
