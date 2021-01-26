import React from 'react'
import ProjectIndexItem from './ProjectIndexItem'
class ProjectIndex extends React.Component{
    constructor(props){
        super(props);
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
               
            </div>
        )
    }
}

export default ProjectIndex;