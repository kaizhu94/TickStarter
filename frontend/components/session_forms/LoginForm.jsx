import React from 'react'
import { Link } from 'react-router-dom'

import DemoLogInContainer from './DemoLogInContainer'

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:"",
        }
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        
        this.props.logIn(this.state)
        .then(null,reject=>this.props.openModal('errors'))
        .then(this.props.closeModal)
        this.setState({
            password: ""
        })
        
    }
    

    update(key){
        return e => this.setState({[key]: e.currentTarget.value});
    }
    render(){
        
        return (
            <div className='login-container'>
                <div className='login-block'>
                    <form onSubmit={this.handleSubmit} className='login-form'>
                        <div id='login-header'> 
                            <h1 id = 'login-text'>Log in</h1>
                        </div>
                        <input type="email"
                                value={this.state.email}
                                placeholder="Email"
                                onChange ={this.update('email')}
                        />
                        <input type='password'
                                value={this.password}
                                placeholder='Password'
                                onChange = {this.update('password')}
                        />
                        <button type = "submit" >Log in</button>
                    </form>
                        <DemoLogInContainer />
                    <p id='signup-link'>New to TickStarter? <Link to='/signup' id='signup-link-button'> Sign up</Link></p>
                   
                </div>
            </div>
        )
    }

}

export default LoginForm;