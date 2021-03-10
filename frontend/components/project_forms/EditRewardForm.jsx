import React from 'react';

class EditRewardForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal: false,
            showEditReward: false,

            month: '',
            year: '',
            title: '',
            description: '',
            amount: 1,
            validmonth: true,
            validyear: true,
            validtitle: true,
            validdescription: true,
            validamount:true,
            monthErrorMessage: '',
            yearErrorMessage: '',
            titleErrorMessage: '',
            descriptionErrorMessage: '',
            amountErrorMessage: '',
        }
    }

    componentDidMount(){
        const {reward} = this.props;
        const date = new Date(reward.estimated_delivery);

        this.setState({
            'title': reward.title,
            month: date.getMonth(),
            year: '',
            'description': reward.description,
            'amount': reward.amount,
        })
    }

    editItem(){
        if(!this.props.disabledBottomButton && !this.props.showRewardForm && !this.props.showEditRewardForm){
            // debugger
            this.props.updateDisabledBottomButton();
            this.props.openEditRewardForm();
            this.setState({
                'showEditReward' : !this.state.showEditReward
            })
        }
    }
    showingForm(){
        return (this.props.disabledBottomButton || this.props.showRewardForm || this.props.showEditRewardForm)? '-show': '';
    }
    
    cancel(){
        this.props.updateDisabledBottomButton();
        this.props.openEditRewardForm();
        this.setState({
            "showEditReward": false
        })
    }
    handleModal(){
        debugger
        if(!this.props.disabledBottomButton && !this.props.showRewardForm && !this.props.showEditRewardForm){
           this.setState({
                'showModal': true
            })
        this.props.showModal(this.state.item_name, this.props.item.rewards,this.props.item.id);
        // this.setState({
        //     'showModal': false
        // });
        }
    }

    update(key){
        const name = `valid` + `${key}`;
        // debugger
        return e => this.setState({[key]: e.currentTarget.value,
                               [name]: true }
            );
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
    isValid(key){
        return this.state[key] ? '': '-invalid';
    }


    render(){
        const {reward} = this.props;
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(reward.estimated_delivery)
        const estimated_delivery = `${months[date.getMonth()]} ${date.getFullYear()}`

        let currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        const month = months[parseInt(this.state.month)-1]
        const itemsInclude = Object.values(reward.items).map((item, index) =>{
            return(
                <li key = {index}>
                    {item.item_name}
                </li>
            )
        })
        debugger
        return(
            <div>
                <div className={`show-reward${this.showingForm()}`}>
                    <div className={`show-reward-section`}>
                        <div className={`show-reward-section-upper`}>
                            <p id='one'>PLEDGE AMOUNT</p>
                            <p id='two'>DETAILS</p>
                            <p id='three'>INCLUDES</p>
                        </div>
                        <div className={`show-reward-section-lower`}>
                            <div className='show-reward-section-lower-up'>
                                <div className='up-one'>
                                    <p id='show-reward-p-one'>CA$ <span>{reward.amount}</span></p> 
                                </div>
                                <div className='up-two'>
                                    <div>
                                        <p id='show-reward-p-one'>{reward.title}</p>
                                        <p id='show-reward-p-two'>Estimated delivery: <span>{estimated_delivery}</span></p>
                                    </div>
                                </div>
                                <div className='up-three'>
                                    <ul className='up-three-list'>
                                        {itemsInclude}
                                    </ul>
                                </div>
                            </div>
                            <div className='show-reward-section-lower-low'>
                                <div className='show-reward-section-lower-buttons'>
                                    <button type='button' id='edit-item-right-button' onClick={()=>this.editItem()}>Edit</button>
                                    <button type='button' id='edit-item-right-button' onClick={()=>this.handleModal()}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {   
                    this.state.showEditReward? (
                        <form onSubmit={this.handleSubmit} className='edit-reward-form'>
                            <div className='top-button-conatiner'>
                                <button type = 'button' id = 'edit-cancel' onClick={()=>this.cancel()}>Cancel</button>
                                <button type = 'submit' id = 'edit-next-button-top'>Save reward</button>
                            </div>
                            <div className = 'reward-form-block'>
                                <div className = 'reward-form-container'>
                                    <div className='form-section'>
                                        <h3>Add a reward</h3>
                                        <p>Offer tangible or intangible things that bring backers closer to your project.</p>
                                    </div>
                                    <div className='form-section'>
                                        <h3>Title</h3>
                                        {
                                            this.state.validtitle ? (
                                                <input type="text" id="reward-title" placeholder='single-limit-edition' onChange={this.update('title')}/>
                                            ):(
                                                <input type="text" id="reward-title-invalid" placeholder='single-limit-edition' onChange={this.update('title')}/>
                                            )
                                        }
                                        <p id='rewrd-error-message'>{this.state.titleErrorMessage}</p>
                                    </div>
                                    <div className='form-section'>
                                        <h3>Amount</h3>
                                            <div className='amount-box'>
                                                {
                                                    this.state.validamount? (
                                                        <div className='amount-section'>
                                                            <label id='amount-label'>CA$</label>
                                                            <input type="number" id="reward-amount" value={this.state.amount} onChange={this.updateAmount('amount')}/>
                                                        </div>
                                                    ): (
                                                        <div className='amount-section-invalid'>
                                                            <label id='amount-label'>CA$</label>
                                                            <input type="number" id="reward-amount" value={this.state.amount} onChange={this.updateAmount('amount')}/>
                                                        </div>
                                                    )
                                                }
                                                <p id='rewrd-error-message'>{this.state.amountErrorMessage}</p>
                                            </div>
                                    </div>
                                    <div className='form-section'>
                                        <h3>Description</h3>
                                        {
                                            this.state.validdescription? (
                                                <textarea id="reward-description"  placeholder='Get an early copy - hot off the presses!' onChange={this.update('description')}></textarea>
                                            ):(
                                                <textarea id="reward-description-invalid"  placeholder='Get an early copy - hot off the presses!' onChange={this.update('description')}></textarea>
                                            )
                                        }
                                        <p id='rewrd-error-message'>{this.state.descriptionErrorMessage}</p>
                                    </div>
                                    <div className='form-section'>
                                        <h3>Estimated delivery</h3>
                                        <div>
                                            <select id={`month${this.isValid('validmonth')}`} value={this.state.month} onChange={this.update('month')}>
                                                <option value='' disabled > Month </option>
                                                <option value='01'> January </option>
                                                <option value='02'> Febuary </option>
                                                <option value='03'> March </option>
                                                <option value='04'> April </option>
                                                <option value='05'> May </option>
                                                <option value='06'> June </option>
                                                <option value='07'> July </option>
                                                <option value='08'> August </option>
                                                <option value='09'> Septemper </option>
                                                <option value='10'> October </option>
                                                <option value='11'> November </option>
                                                <option value='12'> December </option>
                                            </select>
                                            <select  id={`year${this.isValid('validyear')}`} value={this.state.year} onChange={this.update('year')}>
                                                <option value='' disabled > Year </option>
                                                <option value={currentYear}> {currentYear} </option>
                                                <option value={currentYear+1}> {currentYear+1} </option>
                                                <option value={currentYear+2}> {currentYear+2} </option>
                                                <option value={currentYear+3}> {currentYear+3} </option>
                                                <option value={currentYear+4}> {currentYear+4} </option>

                                            </select>
                                        </div>
                                        <div className='date-errors'>
                                            <p id='rewrd-error-message'>{this.state.monthErrorMessage}</p>
                                            <p id='rewrd-error-message'>{this.state.yearErrorMessage}</p>
                                        </div>
                                    </div>
                                    <div className='reward-save-bot'>
                                            <button type = 'submit' id = 'edit-next-button-top'>Save reward</button>
                                            <button type = 'button' id = 'edit-cancel' onClick={()=>this.cancel()}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            <div className = 'preview'>
                                <h3>
                                    Reward preview
                                </h3>
                                <p>Get a glimpse of how this reward will look on your project page.</p>
                                <div className = 'preview-block'>
                                    <h2>Pledge CA$ {this.state.amount} or more</h2>
                                    {
                                        this.state.title==='' ? (
                                            <p id='empty-preview'>Signed limited-edition</p>
                                        ):(
                                            <p id='preview-title'>{this.state.title}</p>
                                        )
                                    }
                                    {
                                        this.state.description==='' ? (
                                            <p id='empty-preview'>Get an early copy — hot off the presses!</p>
                                        ):(
                                            <p id='preview-title'>{this.state.description}</p>
                                        )
                                    }
                                    <div className='preview-date-block'>
                                        <h5>ESTIMATED DELIVERY</h5>
                                        <div className='preview-date'>
                                            {
                                                this.state.month ===''? (
                                                    <h3>Month</h3>
                                                ): (
                                                    <h3>{month}</h3>
                                                )
                                            }
                                            {
                                                this.state.year ===''? (
                                                    <h3>Year</h3>
                                                ): (
                                                    <h3>{this.state.year}</h3>
                                                )
                                            }
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </form>
                    ):(null)
                }
            </div>
        )
    }
}

export default EditRewardForm;