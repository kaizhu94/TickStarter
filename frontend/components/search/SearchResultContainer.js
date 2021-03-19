import { connect } from 'react-redux';

import { searchProjects } from '../../actions/search_actions'

import SearchResult from './SearchResult'
const msp = state =>{
    debugger
    return ({
    })
}

const mdp = dispatch=>{
    return ({
        searchProjects: (searchTerm) => dispatch(searchProjects(searchTerm))
    })
}

export default connect(msp, mdp)(SearchResult)