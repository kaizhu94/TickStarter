import React from 'react';

import Modal from '../modal/Modal'

class EditItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showEditItem: false,
            valid: true,
            item_name: this.props.item.item_name,
            showModal: false,
        };
        this.editItem = this.editItem.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }
    editItem(){
        if(!this.props.disabledBottomButton && !this.props.showItemForm && !this.props.showEditItemForm){
            // debugger
            this.props.updateDisabledBottomButton();
            this.props.openEditItemForm();
            this.setState({
                'showEditItem' : !this.state.showEditItem
            })
        }
    }
    update(key){
        return e => {
            return this.setState({[key]: e.currentTarget.value,
                    'valid': true})
                    };
    }
    cancel(){
        this.props.updateDisabledBottomButton();
        this.props.openEditItemForm();
        this.setState({
            "showEditItem": false
        })
    }
    handleModal(){
        debugger
        if(!this.state.showEditItem && !this.props.showItemForm && !this.props.showEditItemForm){
           this.setState({
                'showModal': true
            })
        this.props.showModal(this.state.item_name, this.props.item.rewards);
        // this.setState({
        //     'showModal': false
        // });
        }
    }
    showingForm(){
        return (this.state.showEditItem || this.props.showItemForm || this.props.showEditItemForm)? '-show': '';
    }
    handleSumbit(e){
        e.preventDefault();
        // debugger
        if(this.state.item_name === ''){
            // debugger
            this.setState({
                'valid': false
            })
        }else{
            // debugger
        }
    }
    render(){
        const {item} = this.props;
        debugger
        return (
            <div>
                {/* {
                    this.state.showModal? (
                        <Modal item_name={this.state.item_name}
                                rewards={item.rewards}/>
                    ) :(null)
                } */}
                <div className={`show-item${this.showingForm()}`}>
                    <div className={`show-item-section`}>
                        <p id='item-name'>{item.item_name}</p>
                        <div className='edit-item-blcok'>
                            <div className='edit-item'>
                                <div className='edit-item-left'>
                                    <p>Include in </p> 
                                    <p id='reward-number'>{item.rewards} rewards</p>
                                </div>
                                <div className='edit-item-right'>
                                    <button type='button' id='edit-item-right-button' onClick={()=>this.editItem()}>Edit</button>
                                    <button type='button' id='edit-item-right-button' onClick={()=>this.handleModal()}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {   
                    this.state.showEditItem ? (
                        <form onSubmit={this.handleSumbit} className='new-item-form'>
                            {/* <div className='new-item-form'> */}
                                <h1>Edit your item</h1>
                                <div className='add-new-item-section'>
                                    <div className='add-new-item-section-word'>
                                        <h3>Item title</h3>
                                        <p>Add a title that quickly and clearly describes this item</p>
                                    </div>
                                    {
                                        this.state.valid ? (
                                            <input type="text"  id={`item-name-input`} value={this.state.item_name}
                                            onChange={this.update('item_name')} placeholder='Digital photo'/>
                                        ):(
                                            <input type="text"  id={`item-name-input-invalid`} value={this.state.item_name}
                                            onChange={this.update('item_name')} placeholder='Digital photo'/>
                                        )
                                    }
                                </div>
                                <div className='edit-item-top-button-conatiner'>
                                    <button type = 'button' id = 'edit-item-cancel' onClick={()=>this.cancel()}>Cancel</button>
                                    <button type = 'submit' id = 'edit-item-next-button-top' >Save Item</button>
                                </div>
                            {/* </div> */}
                        </form>
                    ):(null)
                }
            </div>
        )
    }
}

export default EditItemForm;