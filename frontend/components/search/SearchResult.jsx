import React from 'react';
const queryString = require('query-string');
class SearchResult extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        const search = queryString.parse(this.props.location.search).search;
        this.props.searchProjects(search)
    }

    render(){
        debugger
        return(
            <div>{search}</div>
        )
    }
}

export default SearchResult;