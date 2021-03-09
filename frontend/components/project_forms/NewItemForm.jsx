import React from 'react';

class NewItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item_name:'',
            valid: true
        }
        this.handleSumbit = this.handleSumbit.bind(this);
    }
    update(key){
        return e => {
            return this.setState({[key]: e.currentTarget.value,
                    'valid': true})
                    };
    }
    emptyInput(){
        return this.state.item_name === ''
    }
    handleSumbit(e){
        e.preventDefault();
        if(this.emptyInput()){
            debugger
            this.setState({
                'valid': false
            })
        }else{
            debugger
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSumbit}>
                <div className='new-item-form'>
                    {
                        this.props.disabledBottomButton ? (
                                <div className='top-button-conatiner'>
                                    <button type='button' id = 'edit-cancel' onClick={()=>this.props.cancel()}>Cancel</button>
                                    <button type='submit' id = 'edit-next-button-top'>Save item</button>
                                </div>
                            ):(null)
                    }
                    <h1>Add a new item</h1>
                    <div className='add-new-item-section'>
                        <div className='add-new-item-section-word'>
                            <h3>Item title</h3>
                            <p>Add a title that quickly and clearly describes this item</p>
                        </div>
                        {
                            this.state.valid ? (
                                <input type="text"  id={`item-name-input`}
                                onChange={this.update('item_name')} placeholder='Digital photo'/>
                            ):(
                                <input type="text"  id={`item-name-input-invalid`}
                                onChange={this.update('item_name')} placeholder='Digital photo'/>
                            )
                        }
                    </div>
                </div>
            </form>
        )
    }
}

export default NewItemForm;