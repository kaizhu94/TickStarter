import React from 'react';

import NewRewardFormContainer from './NewRewardFormContainer'
import NewItemFormContainer from './NewItemFormContainer'
import EditItemConatiner from './EditItemContainer'

class Headers extends React.Component {
    render() {
        // debugger
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
            showEditItem: false,
            // showRewardForm: false,
            // showItemForm: false,
            // updateDisabledBottomButton: this.props.disabledBottomButton,
        }
        this.updatetab = this.updatetab.bind(this);
        this.showNewRewardForm = this.showNewRewardForm.bind(this);
        // this.cancel = this.cancel.bind(this);
        // debugger
    }

    componentDidMount(){
        this.props.receiveAllItems(this.props.project.id);
    }
    updatetab(num){
        if(!this.props.disabledBottomButton){
            this.setState({
                'tab': num
            })  
        }
    }
    disable(){
        // debugger
        return this.props.disabledBottomButton ? '-disable': ''
    }
    editItem(){
        if(this.disable() !== '-disable'){
            this.setState({
                'showEditItem': true
            })
        }
    }
    showNewRewardForm(){
        if(!this.props.disabledBottomButton){
            // debugger
            this.props.updateDisabledBottomButton();
        }
    }
    // cancel(){
        // debugger
    //     this.props.updateDisabledBottomButton();
    // }

    render(){
        const tabs = [{title: 'Rewards'}, {title: 'Items'}];
        const disable = this.disable();
        const {items} = this.props;
        debugger
        if(!items){
            debugger
            return null;
        }else{
            const arrayItems = Object.values(items).map((item, index) => {
                return( 
                    <EditItemConatiner key={index}
                                        item={item}
                                        cancel={this.props.updateDisabledBottomButton}
                                        disabledBottomButton = {this.props.disabledBottomButton}/>
                )
            });
            debugger
            return (
                <div className='rewards-items-container'>
                    {/* {
                        this.props.disabledBottomButton ? (
                            this.state.tab === 0 ? (
                                <div className='top-button-conatiner'>
                                    <button id = 'edit-cancel' onClick={()=>this.cancel()}>Cancel</button>
                                    <button id = 'edit-next-button-top'>Save reward</button>
                                </div>
                            ):(
                                <div className='top-button-conatiner'>
                                    <button id = 'edit-cancel' onClick={()=>this.cancel()}>Cancel</button>
                                    <button id = 'edit-next-button-top'>Save item</button>
                                </div>
                            )
                        ) : (null
                        )
                    } */}
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
                                
                                {
                                    this.props.disabledBottomButton ? (
                                        <NewRewardFormContainer cancel={this.props.updateDisabledBottomButton}
                                                                disabledBottomButton = {this.props.disabledBottomButton}/>
                                    ):(null)
                                }
                            </div>
                        ): (
                            <div className='rewards-form-block'>
                                <div className={`new-reward-button-section${this.disable()}`}>
                                    <p>We recommend you list your items below before creating your reward in the other tabs. Items are optional, reusable building blocks for your reward tiers and add-ons to help clearly present what you’re offering.</p>
                                    <button type='button' onClick={this.showNewRewardForm}>+ New item</button>
                                </div>
                                <div className={`items-array${this.disable()}`}>
                                    {
                                        arrayItems
                                    }
                                </div>
                                {
                                    this.props.disabledBottomButton ? (
                                        <NewItemFormContainer cancel={this.props.updateDisabledBottomButton}
                                        disabledBottomButton = {this.props.disabledBottomButton}/>
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