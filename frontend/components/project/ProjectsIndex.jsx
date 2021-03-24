import React from 'react'
import ProjectIndexItem from './ProjectIndexItem'
class ProjectIndex extends React.Component{
    render(){
        const { projects } =this.props;
        
        return (
            <div>
                <div id='recom-item-info'>
                    <ul>
                        <li><ProjectIndexItem project={projects[0]}/></li>
                        <li><ProjectIndexItem project={projects[1]}/></li>
                        <li><ProjectIndexItem project={projects[2]}/></li>
                    </ul>
                </div>
               
            </div>
        )
    }
}

export default ProjectIndex;