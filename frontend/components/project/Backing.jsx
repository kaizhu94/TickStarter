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
            const rewardArray = Object.values.map((reward, index) =>{
                return(
                    <div key = {index}>
                        

                    </div>
                )
            })
            debugger
            return(
                <div className = 'backing-page'>
                    <div className = 'backing-header'>
                        <Link to={`/projects/${this.props.match.params.projectId}`}>{project.project_name}</Link>
                        <p>by {project.founder.username}</p>
                    </div>
                    <div className = 'backing-body'>
                        <div className = 'left-backing-body'>
                            <div className= 'left-top'>
                                <h1>Support this project</h1>
                                <h3>Select an option below</h3>
                            </div>
                        </div>
                        <div className = 'right-backing-body'>
                            <div className= 'right-top'>
                                <h1>Backing isn't buying.</h1>
                                <h3>You're supporting ambitious creative work.</h3>
                                <h5>Tickstarter isn’t a store. We don’t guarantee projects or investigate a creator’s ability to complete them. It’s the responsibility of the creator to complete their project as promised, and the claims of the project are theirs alone.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Backing;