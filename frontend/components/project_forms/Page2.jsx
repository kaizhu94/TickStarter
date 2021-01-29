import React from 'react';
    
class Page2 extends React.Component{
    
    render(){
        if(this.props.currentPage !==2){
            return null
        }
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <h2>Describe what you’ll be creating.</h2>
                    <div className = 'page'>
                        <p>And don’t worry, you can edit this later, too.</p>
                        <textarea
                                id='subtitle' 
                                name='subtitle' 
                                onChange={this.props.handleChange} 
                                value={this.props.subtitle}
                                placeholder='A set of glasses container for food storage.'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page2;