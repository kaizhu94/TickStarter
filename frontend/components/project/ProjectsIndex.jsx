import React from 'react'
import ProjectIndexItem from './ProjectIndexItem'
class ProjectIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page:1
        }
    }

    updatePage(e){

    }

    render(){
        return (
            <div>
                <div id='recom-item-info'>
                    <ul>
                        <li><ProjectIndexItem/></li>
                        <li><ProjectIndexItem/></li>
                        <li><ProjectIndexItem/></li>
                    </ul>
                </div>
                <div className='rec-index-pages'>
                    <ul>
                        <li>{`<`}</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>{`>`}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProjectIndex;