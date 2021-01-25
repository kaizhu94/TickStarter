import React from 'react'
import { Link } from 'react-router-dom'

class LearnStartAProject extends React.Component{

    render(){

        return(
            <div className='learn-page'>
                <div className='learn-page-grid'>
                    <div>
                        <h1>Bring your creative project to life.</h1>
                        <button>starter a project</button>
                    </div>
                    <div className = 'learn-projects'>

                    </div>
                </div>

            </div>
        )
    }
}

export default LearnStartAProject;