import { connect } from 'react-redux';
import {fetchLocations} from '../../actions/location_actions'
import {fetchCategories } from '../../actions/category_actions'
import NewProjectForm from './NewProjectForm'
const msp = state =>{
    return ({
        founderId: state.session.id,
        locations: state.entities.locations
    })
}

const mdp = dispatch=>{
    return ({
        receiveLocations: ()=>dispatch(fetchLocations()),
        receiveCategories: ()=> dispatch(fetchCategories())
    })
}
export default connect(msp, mdp)(NewProjectForm);
