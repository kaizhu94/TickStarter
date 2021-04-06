import React from 'react';

import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchTerm:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(){
        return e => {
            return this.setState({'searchTerm': e.currentTarget.value})
                    };
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.history.push({ pathname: '/search', search: `search=${this.state.searchTerm}`})
        this.props.searchProjects(this.state.searchTerm)
        this.props.updateShowSearch();
    }
    render(){
        return( 
            <div className= 'searchbar'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id='search-bar-input' value={this.state.searchTerm} 
                            placeholder="Search for projects by key word in name" onChange={this.update()}/>
                    <i className="fas fa-times" id="close-search-bar" onClick={()=>this.props.updateShowSearch()}></i>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);