import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:""
        }
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.logIn(this.state)
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value});
    }
    render(){
        return (
            <div className='loginform'>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange ={this.update('email')}
                    />
                    <input type='password'
                            value={this.password}
                            placeholder='Password'
                            onChange = {this.update('password')}
                    />

                    <button type = "submit">Log in</button>
                </form>
                <p>New to KickStarter?<Link to='/signup' >Sign up</Link></p>
            </div>
        )
    }

}

export default LoginForm;