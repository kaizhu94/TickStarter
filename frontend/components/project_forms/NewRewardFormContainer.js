import { connect } from 'react-redux';

import {createItem} from '../../actions/item_actions'

import NewRewrdForm from './NewRewardForm'

const msp = state =>{
    debugger
    return ({
        allItems: state.entities.items
    })
}

const mdp = dispatch=>{
    return ({
        createItem: item => dispatch(createItem(item)),
    })
}
export default connect(msp, mdp)(NewRewrdForm);