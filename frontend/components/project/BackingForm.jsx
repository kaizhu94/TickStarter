import React from 'react'

class BackingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rewardIndex: props.index,
            backingAmount: 10,
            validamount: true,
            hovering: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

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

    render(){
        const { reward } = this.props;
        let showDrop = this.state.rewardIndex === this.props.selectedReward;
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
        let isSelecting = this.state.hovering ||this.state.showDrop ? '-hovering': '';
        return(
            <div className = {`reward-element${isSelecting}`} onMouseEnter={()=>this.triggerOrNot()} onMouseLeave={()=>this.triggerOrNot()}>
                <div className = 'ele-body'>
                    {
                        showDrop ? (
                            <div className='selected-checkmark'><i className="far fa-check"></i></div>
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
                                <form onSubmit={this.handleSubmit}>
                                    <div className='sumbit-backing-upper'>Pledge amount</div>
                                    <div className='sumbit-backing-lower'>
                                        <div className='amount-section'>
                                            <label id='amount-label'>CA$</label>
                                            <input type="number" id="reward-amount" value={this.state.backingAmount} onChange={this.updateAmount('amount')}/>
                                         </div>
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

export default BackingForm;