import React from 'react'

const LogOutButton = (props) =>{
        return (
            <button onClick={()=>props.logout()}>Log Out</button>
        )
}

export default LogOutButton;