import React from 'react';

class EditItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showEditItem: false,
            valid: true,
            item_name: this.props.item.item_name
        };
        this.editItem = this.editItem.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }
    editItem(){
        if(!this.props.disabledBottomButton){
            // debugger
            this.props.updateDisabledBottomButton();
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
        this.setState({
            "showEditItem": false
        })
    }
    handleSumbit(e){
        e.preventDefault();
        if(this.emptyInput()){
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
                <div className='show'>
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
                                    <button type='button' id='edit-item-right-button'>Delete</button>
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
                                    <button type = 'submit' id = 'edit-item-next-button-top'>Save Item</button>
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