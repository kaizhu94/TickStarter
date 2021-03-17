import React from 'react'
import { withRouter } from 'react-router-dom';

import { createBacking } from '../../util/backing_util'

class BackingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rewardIndex: props.index,
            backingAmount: props.reward.amount,
            validamount: true,
            hovering: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        debugger
        if(this.state.backingAmount >= this.props.reward.amount){
            const backing = {
                'backer_id': this.props.userId,
                'backing_amount': this.state.backingAmount,
                'reward_id': this.props.reward.id,
            }
            createBacking(backing)
                .then(
                  () =>  this.props.history.push(`/projects/${this.props.project.id}`)
                )
        }else{
            this.setState({
                'validamount': false,
            })
        }
    }

    updateAmount(key){
        return e =>{  
        let value = e.currentTarget.value; 
        if(value === ''){
            return this.setState({[key]:  value,
            }
                );
        }else{
            return this.setState({[key]:  Math.round(value),
                                'validamount': true
            }
            );
        }
        }
    }
    triggerOrNot(){
        let newState = !this.state.hovering;
        this.setState({hovering: newState})
    }

    isValidAmount(){
        return this.state.validamount? '': '-invalid';
    }

    render(){
        const { reward } = this.props;
        let showDrop = this.state.rewardIndex === this.props.selectedReward;
        debugger
        const itemsInclude = Object.values(reward.items).map((item, index) =>{
            return(
                <li key = {index}>
                    {item.item_name}
                </li>
            )
        });
        const numberOfBackers = reward.backers? reward.backers : 0;
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(reward.estimated_delivery)
        const estimated_delivery = `${months[date.getMonth()]} ${date.getFullYear()}`
        let isBigger= this.state.hovering || showDrop ? '-hovering': '';
        let isSelecting = this.state.showDrop ? '-show':''
        let isNotValidAmount = this.state.backingAmount < reward.amount? '-notValid':'';
        debugger
        return(
            <div className = {`reward-element${isBigger}`} onMouseEnter={()=>this.triggerOrNot()} onMouseLeave={()=>this.triggerOrNot()}>
                <div className = {`ele-body${isSelecting}`} onClick={()=>this.props.updateSelectedReward(this.props.index)}>
                    {
                        showDrop ? (
                            <div className='selected-checkmark'><i className="fas fa-check"></i></div>
                        ):(
                            <div className='unselected'><i className="far fa-circle"></i></div>
                        )
                    }
                    <div className='ele-right'>
                        <div className='ele-right-top'>
                            <div className='ele-right-top-left'>
                                <h2>${reward.amount} or more</h2>
                                <h3>{reward.title}</h3>
                                <p>{reward.description}</p>
                                <div className='ele-items'>
                                    <h5>INCLUDES</h5>
                                    <ul className='ele-items-list'>
                                        {itemsInclude}
                                    </ul>
                                </div>
                                <div className='number-of-backers'> {`${numberOfBackers} backers`}</div>
                            </div>
                            <div className='ele-right-top-right'>
                                <div className='ele-right-top-right-body'>
                                    <p id='show-reward-p-two'>ESTIMATED DELIVERY</p>
                                    <p id='ele-estimated-delivery'>{estimated_delivery}</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        {
                            showDrop ? (
                                <form onSubmit={this.handleSubmit} className='backing-form'>
                                    <div className='sumbit-backing-upper'>Pledge amount</div>
                                    <div className='sumbit-backing-lower'>
                                        <div className={`backing-amount-section${this.isValidAmount()}`}>
                                            <label id='backing-amount-label'>$</label>
                                            <input type="number" id="backing-reward-amount" value={this.state.backingAmount} onChange={this.updateAmount('backingAmount')}/>
                                         </div>
                                         <button type='submit' id={`backing-form-button${isNotValidAmount}`}>Backing</button>
                                    </div>
                                </form>
                            ):(null)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BackingForm);




