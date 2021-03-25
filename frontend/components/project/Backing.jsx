import React from 'react'
import { Link } from 'react-router-dom';

import BackingForm from './BackingForm';

class Backing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedReward: '',
        }
        this.updateSelectedReward = this.updateSelectedReward.bind(this);
    }

    componentDidMount(){
        
        this.props.receiveProject(this.props.match.params.projectId);
        this.props.receiveAllRewards(this.props.match.params.projectId);
    }

    updateSelectedReward(index){
        this.setState({
            'selectedReward': index,
        })
    }

    render(){
        const { rewards, project } = this.props
        
        if(!rewards || !project){
            return (
                <div className='search-result-block'>
                    <div className='search-result-body'>
                        <div className='no-result'><i className="fas fa-exclamation-triangle" id='ex-mark'></i> The reward of this project haven't set up yet!</div>
                    </div>
                </div>
            );
        }else{
            
            const rewardArray = Object.values(rewards).map((reward, index) =>{
                return(
                    <BackingForm key={index}
                                 reward = {reward}
                                 updateSelectedReward={this.updateSelectedReward}
                                 selectedReward={this.state.selectedReward}
                                 index = {index}
                                 userId = {this.props.userId}
                                 project = {project}
                                 />
                )
            })
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
                            {
                                rewardArray.length > 0? (
                                    rewardArray
                                ):(
                                    <div className='search-result-block'>
                                        <div className='search-result-body'>
                                            <div className='no-result'><i className="fas fa-exclamation-triangle" id='ex-mark'></i> The reward of this project haven't set up yet!</div>
                                        </div>
                                    </div>
                                )
                            }
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