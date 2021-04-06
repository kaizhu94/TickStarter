import React from 'react';

import NewRewardFormContainer from './NewRewardFormContainer';
import NewItemFormContainer from './NewItemFormContainer';
import EditItemConatiner from './EditItemContainer';
import EditRewardContainer from './EditRewardContainer'

import Modal from '../modal/Modal';

class Headers extends React.Component {
    render() {
        
      const selected = this.props.selected;
      const headers = this.props.tabs.map((tab, index) => {
        const title = tab.title;
        const klass = index == selected ? 'reward-header-element-active' : 'reward-header-element';
        return (
          <li
            key={`tabs-${index}`}
            className={`${klass}${this.props.disable}`}
            onClick={() => this.props.updatetab(index)}>
                {
                    index === 0 ? (
                        <span id='rewards-icon'><i className="fas fa-gift"></i></span>
                        ):(null)
                }
                {
                    index === 1 ? (
                        <span id='rewards-icon'><i className="fas fa-list"></i></span>
                        ):(null)
                }
                
            <span>{title}{' '}</span>
          </li>
        );
      });
      return (
        <div className='rewards-items-header'>
            <ul className={`reward${this.props.disable}`}>
                {headers}
            </ul>
        </div>
  
      );
   }
  }

class Rewards extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            tab: 0,
            showRewardForm: false,
            showItemForm: false,
            showEditItemForm: false,
            showEditRewardForm:false,
            item_name: '',
            rewards: 0,
            itemId: '',
            rewardsId: ''
            // updateDisabledBottomButton: this.props.disabledBottomButton,
        }
        this.updatetab = this.updatetab.bind(this);
        this.showNewRewardForm = this.showNewRewardForm.bind(this);
        this.cancel = this.cancel.bind(this);
        this.openEditItemForm = this.openEditItemForm.bind(this);
        this.openEditRewardForm = this.openEditRewardForm.bind(this);
        this.showModal = this.showModal.bind(this);
        this.deleteRewardModal = this.deleteRewardModal.bind(this);
        
    }

    componentDidMount(){
        this.props.receiveAllItems(this.props.project.id);
        this.props.receiveAllRewards(this.props.project.id);
    }
    updatetab(num){
        if(!this.props.disabledBottomButton){
            this.setState({
                'tab': num
            })  
            this.props.receiveAllItems(this.props.project.id);
            this.props.receiveAllRewards(this.props.project.id);
        }
    }

    disable(){
        
        return this.props.disabledBottomButton ? '-disable': ''
    }

    showNewRewardForm(){
        if(!this.props.disabledBottomButton){
            
            this.props.updateDisabledBottomButton();
            if(this.state.tab === 0){
                this.setState({
                    'showRewardForm': true
                })
            }else{
                this.setState({
                    'showItemForm': true
                })
            }
        }
    }
    openEditItemForm(){
        this.setState({
            'showEditItemForm': !this.state.showEditItemForm
        })
    }
    openEditRewardForm(){
        this.setState({
            'showEditRewardForm': !this.state.showEditRewardForm
        })
    }
    cancel(){
        
        this.props.updateDisabledBottomButton();
        if(this.state.tab === 0){
            this.setState({
                'showRewardForm': false
            })
        }else{
            this.setState({
                'showItemForm': false
            })
        }
    }

    showModal(item_name, rewards, itemId){
        this.setState({
            'item_name': item_name,
            'rewards': rewards,
            'itemId': itemId,
        })
        this.props.openModal('deleteItem');
    }
    deleteRewardModal(rewardId){
        this.setState({
            'rewardId': rewardId,
        })
        this.props.openModal('deleteReward');
    }
    render(){
        const tabs = [{title: 'Rewards'}, {title: 'Items'}];
        const disable = this.disable();
        const {items, rewards} = this.props;
        
        if(!items || !rewards){
            
            return null;
        }else{
            const arrayItems = Object.values(items).map((item, index) => {
                return( 
                    <EditItemConatiner key={index}
                                        item={item}
                                        updateDisabledBottomButton={this.props.updateDisabledBottomButton}
                                        disabledBottomButton = {this.props.disabledBottomButton}
                                        showItemForm={this.state.showItemForm}
                                        showEditItemForm={this.state.showEditItemForm}
                                        openEditItemForm={this.openEditItemForm}
                                        showModal = {this.showModal}
                                        />
                )
            });
            const rewardsArray = Object.values(rewards).map((reward,index) => {
                return(
                    <EditRewardContainer key={index}
                                        reward={reward}
                                        updateDisabledBottomButton={this.props.updateDisabledBottomButton}
                                        disabledBottomButton = {this.props.disabledBottomButton}
                                        showRewardForm = {this.state.showRewardForm}
                                        showEditRewardForm = {this.state.showEditRewardForm}
                                        openEditRewardForm ={this.openEditRewardForm}
                                        deleteRewardModal={this.deleteRewardModal}
                                        receiveAllItems={this.props.receiveAllItems}
                                        project={this.props.project}
                                        />
                )
            })
            
            return (
                <div className='rewards-items-container'>
                    <Modal item_name={this.state.item_name}
                                rewards={this.state.rewards}
                                itemId={this.state.itemId}
                                rewardId = {this.state.rewardId}/>
                   
                    <Headers selected = {this.state.tab}
                            tabs = {tabs}
                            updatetab = {this.updatetab}
                            disable = {disable}
                                    />
                    {
                        this.state.tab === 0 ? (
                            <div className='rewards-form-block'>
                                <div className={`new-reward-button-section${this.disable()}`}>
                                    <p>Add rewards to your project, which can be physical items or special experiences</p>
                                    <button type='button' onClick={this.showNewRewardForm}>+ New reward</button>   
                                </div>
                                <div className={`rewards-array`}>
                                    {
                                        rewardsArray
                                    }
                                </div>
                                {
                                    (this.props.disabledBottomButton && this.state.showRewardForm) ? (
                                        <NewRewardFormContainer cancel={this.cancel}
                                                                disabledBottomButton = {this.props.disabledBottomButton}
                                                                project={this.props.project}
                                                               
                                                                />
                                    ):(
                                        null
                                    )
                                }
                            </div>
                        ): (
                            <div className='rewards-form-block'>
                                <div className={`new-reward-button-section${this.disable()}`}>
                                    <p>We recommend you list your items below before creating your reward in the other tabs. Items are optional, reusable building blocks for your reward tiers and add-ons to help clearly present what you’re offering.</p>
                                    <button type='button' onClick={this.showNewRewardForm}>+ New item</button>
                                </div>
                                <div className={`items-array`}>
                                    {
                                        arrayItems
                                    }
                                </div>
                                {
                                    (this.props.disabledBottomButton && this.state.showItemForm) ? (
                                        <NewItemFormContainer cancel={this.cancel}
                                                            disabledBottomButton = {this.props.disabledBottomButton}
                                                            project={this.props.project}
                                        />
                                    ):(null)
                                }
                            </div>
                        )
                    }
                </div>
            )
        }
    }
}

export default Rewards;