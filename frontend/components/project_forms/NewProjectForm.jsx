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
            location_id:"",
            published: false,
            founder_id: "",
            catagory_id: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.nextButton=this.nextButton.bind(this);
        this.prevButton=this.prevButton.bind(this);
        // debugger
    }

    componentDidMount(){
        this.props.receiveLocations();
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault();
    }
    next(){
        // debugger
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
        if(this.state.currentPage < 3){
            return (
                <button
                    className = 'next-page-button'
                    type = 'button'
                    onClick = {this.next}
                >
                    Continue
                </button>
            )
        }
    }
    prevButton(){
        if(this.state.currentPage !== 1){
            return(
                <button
                    className = 'prev-page-button'
                    type ='button'
                    onClick={this.previous}
                >
                    Previous
                </button>
            )
        }
        return null
    }
    render(){
        const {locations} = this.props;
        return (
            <React.Fragment>
            <div>
                <div>
                    <h3>{this.state.currentPage} of 3</h3>

                    <form onSubmit={this.handleSubmit}>
                        <Page1 
                            currentPage = {this.state.currentPage}
                            handleChange = {this.handleChange}
                            catagory_id = {this.state.catagory_id}
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
                        />
                        <div>
                            {this.prevButton()}
                            {this.nextButton()}
                        </div>
                    </form>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default NewProjectForm;