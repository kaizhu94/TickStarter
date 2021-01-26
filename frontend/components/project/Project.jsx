import React from 'react'
import { Link } from 'react-router-dom' 
class  Project extends React.Component{

    render(){
        return (
            <div className='project-block'>
                <img id="posture" src={window.posture} ></img>
                <h1 id='project-header'>GOPOSE: World’s first 2 in 1 fix posture and pulse massager</h1>
                <p id='feature-subtitle'>GOPOSE Tech | Fix Posture | Pulse Massage | Intuitive GOPOSE App | Get Your Health & Confidence Back</p>
                <p id='feature-founder'>By <Link to='/' id='founder-name'>Kai</Link></p>
            </div>
        )
    }

}

export default Project;