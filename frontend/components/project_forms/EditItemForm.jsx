import React from 'react';

class EditItemForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {item} = this.props;
        return (
            <div>
                {
                        this.props.disabledBottomButton ? (
                                <div className='top-button-conatiner'>
                                    <button type = 'button' id = 'edit-cancel' onClick={()=>this.props.cancel()}>Cancel</button>
                                    <button type = 'submit' id = 'edit-next-button-top'>Save Item</button>
                                </div>
                            ):(null)
                    }
                <div className={`show-item-section`}>
                    <p id='item-name'>{item.item_name}</p>
                    <div className='edit-item-blcok'>
                        <div className='edit-item'>
                            <div className='edit-item-left'>
                                <p>Include in </p> 
                                <p id='reward-number'>{item.rewards} rewards</p>
                            </div>
                            <div className='edit-item-right'>
                                <button type='button' id='edit-item-right-button'>Edit</button>
                                <button type='button' id='edit-item-right-button'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>Hi</div>
            </div>
        )
    }
}

export default EditItemForm;