import React from 'react'
import { Link } from 'react-router-dom'
class  SampleIndexItem extends React.Component{

    render(){
        return (
            <div className='project-index-item-block'>
                <div className='project-index-item-intaincer'>
                    <img id="sample" src={window.sample} ></img>
                    <div className='recom-project-info'>
                        <h1>Human Punishment: The Beginning</h1>
                        <p id='found-percentage'>56% funded</p>
                        <p id='founder'>By <Link to='/' id='founder-name'>Kai</Link></p>
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

export default SampleIndexItem;