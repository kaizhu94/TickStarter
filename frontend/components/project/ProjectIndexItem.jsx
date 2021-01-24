import React from 'react'
import { Link } from 'react-router-dom'

class  ProjectIndexItem extends React.Component{

    render(){
        return (
            <div className='project-index-item-block'>
                <div className='project-index-item-intaincer'>
                    <Link to='/signup'>
                        <img id="posture" src={window.posture} ></img>
                    </Link>
                    
                    <div className='recom-project-info'>
                        <h1>GOPOSE: World’s first 2 in 1 fix posture and pulse massager</h1>
                        <p id='found-percentage'>100% funded</p>
                        <p id='founder'>By <Link to='/signup' id='name'>Kai</Link></p>
                        <ul className= 'like-or-not'>
                            <img id="like" src={window.like} ></img>
                            <img id="dislike" src={window.dislike} ></img>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProjectIndexItem;