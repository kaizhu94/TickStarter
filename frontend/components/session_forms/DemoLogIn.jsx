import React from 'react'

class DemoLogIn extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: "kaizhu@gmail.com",
            password: "123456"
        }
    }
    render(){
        return (
            <button onClick={()=>this.props.login(this.state)}>Demo</button>
        )
    }
}

export default DemoLogIn;