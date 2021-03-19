import React from 'react'

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
        
    }
    render(){
        return( 
            <div className= 'searchbar'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id='search-bar-input' value={this.state.searchTerm} 
                            placeholder='Search for projects or categories' onChange={this.update()}/>
                    <i class="fas fa-times" id="close-search-bar" onClick={()=>this.props.updateShowSearch()}></i>
                </form>
            </div>
        )
    }
}

export default SearchBar;