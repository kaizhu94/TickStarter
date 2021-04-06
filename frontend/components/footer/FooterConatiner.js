import { connect } from 'react-redux';

import Footer from './Footer'

const msp = (state) =>{
    return ({
        isLogged: Boolean(state.session.id)
    })
}
export default connect(msp, null)(Footer);