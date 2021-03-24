import React from 'react';
import { withRouter }  from 'react-router-dom';

class SectionBar extends React.Component{
    redirect(catId){
        this.props.history.push(`/cat/${catId}`);
    }
    render(){
        // if(!this.props.maincategories){
        //     return null;
        // }
        // let artId, comicId, designId, filmId, foodId, gameId, musicId, publishingId = '';
        // const {maincategories} = this.props;
        // Object.values(maincategories).map( cat => {
        //     if(cat.category_name === 'Art'){
        //         artId = cat.id;
        //     }
        //     if(cat.category_name === "Comics"){
        //         comicId = cat.id;
        //     }
        //     if(cat.category_name === "Design"){
        //         designId = cat.id;
        //     }
        //     if(cat.category_name === 'Film'){
        //         filmId = cat.id;
        //     }
        //     if(cat.category_name === 'Food'){
        //         foodId = cat.id;
        //     }
        //     if(cat.category_name === 'Games'){
        //         gameId = cat.id;
        //     }
        //     if(cat.category_name === 'Music'){
        //         musicId = cat.id;
        //     }
        //     if(cat.category_name === "Technology"){
        //         publishingId = cat.id;
        //     }
        // })
        
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