import { connect } from 'react-redux'

import { fetchProjects } from '../../actions/project_actions'
import {fetchCategories } from '../../actions/category_actions'

import ProjectByCat from './ProjectByCat'

const msp = state =>{
    return ({
        currentUser: state.entities.users[state.session.id],
        publishedProjects: state.entities.projects.published_projects,
        categories: state.entities.categories
    })
}
const mdp = dispatch=>{
    return ({
        fetchProjects: () => dispatch(fetchProjects()),
        fetchCategories: () => dispatch(fetchCategories())
    })
}

export default connect(msp, mdp)(ProjectByCat)