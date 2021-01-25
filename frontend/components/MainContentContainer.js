import { connect } from 'react-redux'

import MainContents from './MainContents'

const msp = state =>{
    return ({
        // isLoggedIn: Boolean(state.session),
        currentUser: state.entities.users[state.session.id]
    })
}


export default connect(msp, null)(MainContents)