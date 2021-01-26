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
            <div className='demo-block'>

                <button  id='demo-button' onClick={()=>this.props.login(this.state)}>Guest Login</button>
            </div>

            
        )
    }
}

export default DemoLogIn;