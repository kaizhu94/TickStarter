import { connect } from 'react-redux'
import { login } from '../../actions/session_action'
import DemoLogIn from './DemoLogIn'


const mdp = dispatch=>{
    return ({
        login: (user) => dispatch(login(user))
    })
}

export default connect(null, mdp)(DemoLogIn);