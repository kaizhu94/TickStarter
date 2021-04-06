import { connect } from 'react-redux';
import {createItem} from '../../actions/item_actions'
import NewItemForm from './NewItemForm'



const mdp = dispatch=>{
    return ({
        createItem: item => dispatch(createItem(item)),
    })
}
export default connect(null, mdp)(NewItemForm);