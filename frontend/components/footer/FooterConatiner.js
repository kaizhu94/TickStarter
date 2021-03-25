import { connect } from 'react-redux';


import Footer from './Footer'

const msp = (state, ownprops) =>{
    debugger
    return ({
        isLogged: Boolean(state.session.id)
    })
}

const mdp = dispatch=>{
    return ({
    
    })
}
export default connect(msp, null)(Footer);