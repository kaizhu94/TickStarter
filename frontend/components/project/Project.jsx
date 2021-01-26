import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

=======
import { Link } from 'react-router-dom' 
>>>>>>> newAuth
class  Project extends React.Component{

    render(){
        return (
            <div className='project-block'>
<<<<<<< HEAD
                <Link to='/signup'>
                    <img id="posture" src={window.posture} ></img>
                </Link>
                    <h1 id='project-header'>
                        <Link to='/signup' id='title'>
                        GOPOSE: World’s first 2 in 1 fix posture and pulse massager
                            </Link>
                        </h1>
                <p>GOPOSE Tech | Fix Posture | Pulse Massage | Intuitive GOPOSE App | Get Your Health & Confidence Back</p>
                <p id='founder'>By <Link to='/signup' id='name'>Kai</Link></p>
               
=======
                <img id="posture" src={window.posture} ></img>
                <h1 id='project-header'>GOPOSE: World’s first 2 in 1 fix posture and pulse massager</h1>
                <p id='feature-subtitle'>GOPOSE Tech | Fix Posture | Pulse Massage | Intuitive GOPOSE App | Get Your Health & Confidence Back</p>
                <p id='feature-founder'>By <Link to='/' id='founder-name'>Kai</Link></p>
>>>>>>> newAuth
            </div>
        )
    }

}

export default Project;