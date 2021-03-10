import React from 'react';

class NewRewrdForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
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
        this.handleSubmit= this.handleSubmit.bind(this);
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

    handleSubmit(e){
        // debugger
        e.preventDefault();
        let validMonth = this.state.validmonth;
        let validYear= this.state.validyear;
        let validTitle= this.state.validtitle;
        let validDescription= this.state.validdescription;
        let validAmount= this.state.validamount;
        let monthError= '';
        let yearError= '';
        let titleError= '';
        let descriptionError= '';
        let amountError= '';
        
        if(this.state.month === ''){
            validMonth = false;
            monthError = 'Month is required';
        }
        if(this.state.year === ''){
            // debugger
            validYear = false;
            yearError = 'Year is required';
        }
        if(this.state.title === ''){
            validTitle = false;
            titleError = 'Title is required';
        }
        if(this.state.description === ''){
            validDescription = false;
            descriptionError = 'Please enter a description or at least one item.'
        }
        if(this.state.amount < 1 || this.state.amount > 13000){
            // debugger
            validAmount = false;
            amountError='Enter a value between $1 and $13,000.'
        }
        // debugger
        if(validMonth===false || validYear===false || validTitle===false || validDescription===false || validAmount===false){
            // debugger
            this.setState({
                'validmonth': validMonth,
                'validyear': validYear,
                'validtitle': validTitle,
                'validdescription': validDescription,
                'validamount':validAmount,
                'monthErrorMessage': monthError,
                'yearErrorMessage': yearError,
                'titleErrorMessage': titleError,
                'descriptionErrorMessage': descriptionError,
                'amountErrorMessage': amountError
            })
            // debugger
        }else{
            let Format = `${this.state.year}-${this.state.month}-'01'T'10':'00':'00'`;
            let date = new Date(Format);

            // debugger
        }
        // if()
    }
    isValid(key){
        return this.state[key] ? '': '-invalid';
    }
    render(){
        let currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        const months = [ "January", "February", "March", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December" ];
        const month = months[parseInt(this.state.month)-1]
        debugger
        return(
            <div className = 'reward-form-section'>
                <form onSubmit={this.handleSubmit} className='add-reward-form'>
                    <div className='top-button-conatiner'>
                        <button type = 'button' id = 'edit-cancel' onClick={()=>this.props.cancel()}>Cancel</button>
                        <button type = 'submit' id = 'edit-next-button-top'>Save reward</button>
                    </div>
                    {/* {
                        this.props.disabledBottomButton ? (
                                <div className='top-button-conatiner'>
                                    <button type = 'button' id = 'edit-cancel' onClick={()=>this.props.cancel()}>Cancel</button>
                                    <button type = 'submit' id = 'edit-next-button-top'>Save reward</button>
                                </div>
                            ):(null)
                    } */}
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
                                    <button type = 'button' id = 'edit-cancel' onClick={()=>this.props.cancel()}>Cancel</button>
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
            </div>
        )
    }
}

export default NewRewrdForm;