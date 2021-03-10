import { connect } from 'react-redux';
import {createItem} from '../../actions/item_actions'
import NewItemForm from './NewItemForm'

const msp = state =>{
    //    
    return ({
    })
}

const mdp = dispatch=>{
    return ({
        createItem: item => dispatch(createItem(item)),
    })
}
export default connect(msp, mdp)(NewItemForm);