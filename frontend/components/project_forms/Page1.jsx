import React from 'react';
    
class Page1 extends React.Component{
    
    render(){
        // debugger
        if(this.props.currentPage !==1){
            return null
        }
        // debugger
        return(
            
            <div>
                <div>
                    <div>
                        <h2>First, lets get you set up.</h2>
                        <p>Pick a project category to connect with a specific community. You can always update this later.</p>
                    </div>                
                </div>
            </div>
        )
    }
}
export default Page1;