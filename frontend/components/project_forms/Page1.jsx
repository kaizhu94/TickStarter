import React from 'react';
    
class Page1 extends React.Component{
    
    render(){
        if(this.props.currentPage !==1){
            return null
        }
    
        const {maincategories} = this.props
        const selector = <select name="category_id"
                                 id="category-selector"
                                 value = {this.props.category_id}
                                 onChange = {this.props.handleChange}>
                                <option value='0' disabled hidden > Select your category </option>
                                {
                                    maincategories.map((c, i) => {
                                    return  <option value={c.id} key={i}>{c.category_name}</option>
                                    })
                                }
                        </select>
            
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <h2>First, let's get you set up.</h2>
                        <p>Pick a project category to connect with a specific community. You can always update this later.</p>
                        <div>
                            {selector}
                        </div>            
                </div>
            </div>
        )
    }
}
export default Page1;