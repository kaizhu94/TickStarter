import React from 'react'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

class NewProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPage: 1,
            subtitle:"",
            location_id:0,
            published: false,
            founder_id: this.props.founderId,
            category_id: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.nextButton=this.nextButton.bind(this);
        this.prevButton=this.prevButton.bind(this);
        //    
    }

    componentDidMount(){
        //    
        this.props.receiveLocations();
        this.props.receiveCategories();
    }

    handleChange(event){
        //    
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        //    
    }
    handleSubmit(event){
        event.preventDefault();
        let newState =Object.assign({}, this.state);
        delete newState['currentPage'];
        this.props.createProject(newState)
            .then((project)=>{
                return  this.props.history.push(`/projects/${project.project.id}/dashboard`)})
    }
    next(){
        //    
        let currentPage = this.state.currentPage;
        currentPage = currentPage >= 2? 3: currentPage + 1;
        this.setState({
            currentPage: currentPage
        })
    }
    previous(){
        let currentPage = this.state.currentPage;
        currentPage = currentPage <= 1? 1: currentPage - 1;
        this.setState({
            currentPage: currentPage
        })
    }

    nextButton(){
        if(this.state.currentPage === 1){
            return (
                <button
                    id= 'next-button'
                    className = 'next-page-button'
                    type = 'button'
                    onClick = {this.next}
                    disabled={!this.state.category_id}
                >
                    Next: Project Idea
                </button>
            )
        }else if(this.state.currentPage === 2){
            return (
                <button
                    id= 'next-button'
                    className = 'next-page-button'
                    type = 'button'
                    onClick = {this.next}
                    disabled={!this.state.subtitle}
                >
                    Next: Location
                </button>
            )
        }else{
            return (
                
                <button
                    id= 'next-button'
                    className = 'next-page-button'
                    type = 'submit'
                    disabled={!this.state.location_id}
                >
                    Continue
                </button>
            )
        }
    }
    prevButton(){
        if(this.state.currentPage === 2){
            return(
                <button
                    id='prev-button'
                    className = 'prev-page-button'
                    type ='button'
                    onClick={this.previous}
                >
                    ⬅ Category
                </button>
            )
        }else if( this.state.currentPage === 3){
            return(
                <button
                    id='prev-button'
                    className = 'prev-page-button'
                    type ='button'
                    onClick={this.previous}
                >
                    ⬅ Project Idea
                </button>
            )
        }else{
            return (
                <p>Welcome back.</p>
            )
        }
    }
    render(){
        //    
        if(!this.props.maincategories){
            //    
            return <div>Loading Page</div>
        }else{
            //    
            const maincategories = Object.values(this.props.maincategories)
            const locations = Object.values(this.props.locations)
            //    
            return (
                
                <div className='new-project-form-block'>
                    <div className='new-project-form-container'>
                            <h3>{this.state.currentPage} of 3</h3>
                        <div className='page-block'>
                            <div className='page-container'>
                                <form onSubmit={this.handleSubmit}>
                                    <Page1 
                                        currentPage = {this.state.currentPage}
                                        handleChange = {this.handleChange}
                                        category_id = {this.state.category_id}
                                        maincategories = {maincategories}
                                    />
                                    <Page2 
                                        currentPage = {this.state.currentPage}
                                        handleChange = {this.handleChange}
                                        subtitle ={this.state.subtitle}
            
                                    />
                                    <Page3 
                                        currentPage = {this.state.currentPage}
                                        handleChange = {this.handleChange}    
                                        location_id = {this.state.location_id}   
                                        locations = {locations}                  
                                    />
                                    <div className='form-buttons'>
                                        {this.prevButton()}
                                        {this.nextButton()}
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                    
            )
        }
        
    }
}

export default NewProjectForm;