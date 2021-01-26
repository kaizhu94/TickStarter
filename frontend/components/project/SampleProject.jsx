import React from 'react'
import { Link } from 'react-router-dom' 
class  SampleProject extends React.Component{

    render(){
        return (
            <div className='project-block'>
                <img id="posture" src={window.sample} ></img>
                <h1 id='project-header'>Human Punishment: The Beginning</h1>
                <p id='feature-subtitle'>A brand new stand-alone game in the Human Punishment universe. 3-6 players fight the Machine Revolution in a dystopian cyberpunk city.</p>
                <p id='feature-founder'>By <Link to='/' id='founder-name'>Kai</Link></p>
            </div>
        )
    }

}

export default SampleProject;