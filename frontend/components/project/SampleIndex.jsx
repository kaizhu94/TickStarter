import React from 'react'
import SampleIndexItem from './SampleIndexItem'
class SampleIndex extends React.Component{
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
                        <li><SampleIndexItem/></li>
                        <li><SampleIndexItem/></li>
                        <li><SampleIndexItem/></li>
                    </ul>
                </div>
               
            </div>
        )
    }
}

export default SampleIndex;