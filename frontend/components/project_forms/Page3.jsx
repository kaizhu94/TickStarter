import React from 'react';
    
class Page3 extends React.Component{
    
    render(){
        if(this.props.currentPage !==3){
            return null
        }

        return(
            <div>
                <div>
                    <div>
                        <h2>Finally, let’s confirm your eligibility.</h2>
                        <p>Tell us where you’re based and confirm a few other details before we proceed.</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Page3;