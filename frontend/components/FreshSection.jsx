import React from 'react'
import Project from './project/Project'


class FreshSection extends React.Coponent{
    render(){
        return (
            <div className='section-index'>
                <ul>
                    <li><Project/></li>
                    <li><Project/></li>
                    <li><Project/></li>
                    <li><Project/></li>
                </ul>
            </div>
        )
    }
}

export default FreshSection;