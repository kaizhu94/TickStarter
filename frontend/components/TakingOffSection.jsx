import React from 'react'
import Project from './project/Project'


class TakingOffSection extends React.Component{
    render(){
        const { projects } = this.props;
        return (
            <div className='section-index'>
                <ul>
                    <li><Project project = {projects[0]}/></li>
                    <li><Project project = {projects[1]}/></li>
                    <li><Project project = {projects[2]}/></li>
                    <li><Project project = {projects[3]}/></li>
                </ul>
            </div>
        )
    }
}

export default TakingOffSection;