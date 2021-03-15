import React from 'react'
import { Link } from 'react-router-dom';

class Backing extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.receiveAllRewards(this.props.match.params.projectId);
        this.props.receiveProject(this.props.match.params.projectId);
    }

    render(){
        const { rewards, project } = this.props
        if(!rewards || !project){
            return null;
        }else{
            debugger
            return(
                <div className = 'backing-page'>
                    <div className = 'backing-header'>
                        <Link to={`/projects/${this.props.match.params.projectId}`}>{project.project_name}</Link>
                        <p>by {project.founder.username}</p>
                    </div>
                </div>
            )
        }
    }
}

export default Backing;