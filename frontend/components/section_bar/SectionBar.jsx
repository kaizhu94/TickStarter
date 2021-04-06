import React from 'react';
import { withRouter }  from 'react-router-dom';

class SectionBar extends React.Component{
    redirect(catId){
        this.props.history.push(`/cat/${catId}`);
    }
    render(){
        
        return (
            <div className= 'section-bar'>
                <div className='section-container'>
                    <ul id='section-index'>
                        <li onClick={()=>this.redirect(1)}>Arts</li>
                        <li onClick={()=>this.redirect(2)}>Comics & Illustration</li>
                        <li onClick={()=>this.redirect(3)}>Design & Tech</li>
                        <li onClick={()=>this.redirect(4)}>Film</li>
                        <li onClick={()=>this.redirect(5)}>Food & Craft</li>
                        <li onClick={()=>this.redirect(6)}>Games</li>
                        <li onClick={()=>this.redirect(7)}>Music</li>
                        <li onClick={()=>this.redirect(8)}>Publishing</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(SectionBar);