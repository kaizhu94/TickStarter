import React from 'react'

class BackingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rewardIndex: props.key,
        }
    }
    render(){
        const { reward } = this.props;
        let showDrop = this.state.rewardIndex == this.props.selectedReward;
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
        return(
            <div className = 'reward-element'>
                <div className = 'ele-body'>
                    {
                        showDrop ? (
                            <div className='selected-checkmark'><i class="far fa-check"></i></div>
                        ):(
                            <div className='unselected'><i class="far fa-circle"></i></div>
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
                            this.state.showDrop ? (
                                <div>

                                </div>
                            ):(null)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BackingForm;