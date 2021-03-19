import React from 'react';
const queryString = require('query-string');
class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchTerm: queryString.parse(props.location.search).search
        }
    }
    
    componentDidUpdate(prevPops, prevState){
        if(prevPops !== this.props){
            debugger
            this.props.searchProjects(this.state.searchTerm).then( 
                this.setState({ 'searchTerm': queryString.parse(this.props.location.search).search}))
        }
    }
    componentDidMount(){
        this.props.searchProjects(this.searchTerm)
    }

    render(){
        debugger
        return(
            <div>{this.state.searchTerm}</div>
        )
    }
}

export default SearchResult;