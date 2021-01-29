import React from 'react';
    
class Page3 extends React.Component{
    
    render(){
        if(this.props.currentPage !==3){
            return null
        }
        const{locations} =this.props
        const selector = <select name="location_id"
                                 id="location-selector"
                                 value = {this.props.location_id}
                                 onChange = {this.props.handleChange}>
                                <option value='0' disabled hidden >Select your country</option>
                                {
                                    locations.map((l, i) => {
                                    return  <option value={l.id} key={i}>{l.location}</option>
                                    })
                                }
                        </select>
        //    
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                    <h2>Finally, let’s confirm your eligibility.</h2>
                    <div className = 'page'>
                        <p>Tell us where you’re based and confirm a few other details before we proceed.</p>
                        <div>
                            {selector}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Page3;