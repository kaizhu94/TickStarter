import React from 'react'
import SampleProject from './project/SampleProject'


class TakingOffSection extends React.Component{
    render(){
        return (
            <div className='section-index'>
                <ul>
                    <li><SampleProject/></li>
                    <li><SampleProject/></li>
                    <li><SampleProject/></li>
                    <li><SampleProject/></li>
                </ul>
            </div>
        )
    }
}

export default TakingOffSection;