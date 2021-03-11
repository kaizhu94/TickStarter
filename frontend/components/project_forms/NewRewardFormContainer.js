import { connect } from 'react-redux';



import NewRewrdForm from './NewRewardForm'

const msp = state =>{
    debugger
    return ({
        allItems: state.entities.items
    })
}

const mdp = dispatch=>{
    return ({
       
    })
}
export default connect(msp, mdp)(NewRewrdForm);