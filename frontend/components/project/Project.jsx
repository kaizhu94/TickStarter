import React from 'react'
import { Link } from 'react-router-dom'

class  Project extends React.Component{

    render(){
        return (
            <div className='project-block'>
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
               
            </div>
        )
    }

}

export default Project;