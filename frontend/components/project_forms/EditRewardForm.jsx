import React from 'react';

class EditRewardForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal: false,
            showEditReward: false,

            items: {},
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

            showAddItem: false,


            item_name: '',
            validInputName: '',

            project_id: props.project.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
    }
    
    componentDidMount(){
        const {reward} = this.props;
        const date = new Date(reward.estimated_delivery);

        this.setState({
            'title': reward.title,
            month: (date.getMonth()+1)<10? `0${date.getMonth()+1}`: `${date.getMonth()+1}`,
            year: date.getFullYear(),
            'description': reward.description,
            'amount': reward.amount,
            'items': this.props.reward.items ? this.props.reward.items : this.state.items,
        })
    }

    editItem(){
        if(!this.props.disabledBottomButton && !this.props.showRewardForm && !this.props.showEditRewardForm){
            
            this.props.updateDisabledBottomButton();
            this.props.openEditRewardForm();
            this.props.receiveAllItems(this.props.reward.project_id);
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
        const {reward} = this.props;
        const date = new Date(reward.estimated_delivery);
        this.setState({
            "showEditReward": false,
            'title': reward.title,
            'month': (date.getMonth()+1)<10? `0${date.getMonth()+1}`: `${date.getMonth()+1}`,
            'year': date.getFullYear(),
            'description': reward.description,
            'amount': reward.amount,
            'items': this.props.reward.items ? this.props.reward.items : {},
        })
        if(this.state.showAddItem) this.updateshowAddItem();
    }
    handleModal(e){
        e.stopPropagation();
        if(!this.props.disabledBottomButton && !this.props.showRewardForm && !this.props.showEditRewardForm){
           this.setState({
                'showModal': true
            })
        this.props.deleteRewardModal(this.props.reward.id);
        }
    }

    update(key){
        const name = `valid` + `${key}`;
        
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
    updateItemName(key){
        return e => this.setState({[key]: e.currentTarget.value }
        );
    }

    updateshowAddItem(){
        this.setState({
            'showAddItem': !this.state.showAddItem,
            'item_name': ''
        })
    }
    updateItems(){
        return e =>{
            const newItem = this.props.allItems[parseInt(e.currentTarget.value)]
            const newItems = Object.assign({}, this.state.items,{[parseInt(e.currentTarget.value)]: newItem});
            
            this.setState({
                'items': newItems
            })
            this.updateshowAddItem();
        }
    }

    isValid(key){
        return this.state[key] ? '': '-invalid';
    }

    removeItem(id){
        return e =>{
            const newItems = Object.assign({}, this.state.items);
            delete newItems[parseInt(id)];
            
            this.setState({
                'items': newItems
            })
        }
    }

    handleSubmit(e){
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
            
            validAmount = false;
            amountError='Enter a value between $1 and $13,000.'
        }
        
        if(validMonth===false || validYear===false || validTitle===false || validDescription===false || validAmount===false){
            
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
            
        }else{
            let Format = `${this.state.year}-${this.state.month}-01T10:00:00.000Z`;
            let date = new Date(Format);
          
            const reward = { project_id: this.state.project_id,
                             rewardId: this.props.reward.id,
                             title: this.state.title,
                             description: this.state.description,
                             estimated_delivery: date,
                             amount: this.state.amount,
                             items: this.state.items,
                            }
            
            this.props.updateReward(reward)
                .then(reward => {
                    return this.setState({
                        'items': reward.reward.items ? reward.reward.items:{},
                    })
                })
            this.cancel();
        }
        // if()
    }

    createNewItem(e){
        e.preventDefault();

        if(this.state.item_name === '' || !this.isNameExist()){
            this.setState({
                'validInputName': '-invalid'
            })
        }else{
            const item = {'item_name': this.state.item_name, 'project_id': this.props.project.id}
            this.props.createItem(item)
            .then((item) =>{
                const newItem = item.item;
                const newItems = Object.assign({}, this.state.items, {[newItem.id]: newItem});
                
                    return this.setState({
                        'items': newItems,
                        'validInputName': '',
                    })
                })
            
            this.updateshowAddItem();
        }
    }
    isNameExist(){
        const names = Object.values(this.props.allItems);
        for(let i =0; i< names.length; i++){
            if(this.state.item_name === names[i].item_name){
                return false;
            }
        }
        return true;
    }
    render(){
        const {reward} = this.props;
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(reward.estimated_delivery)
        const estimated_delivery = `${months[date.getMonth()]} ${date.getFullYear()}`
        
        let currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        const month = months[parseInt(this.state.month)-1]
        const itemsInclude = reward.items?  Object.values(reward.items).map((item, index) =>{
            return(
                <li key = {index}>
                    {item.item_name}
                </li>
            )
        }):'';
        const itemsForPreview = Object.values(this.state.items).map((item, index) =>{
            return(
                <li key = {index}>
                    {item.item_name}
                </li>
            )
        })
        const allItems = Object.values(this.props.allItems);
        const allItemsArray = allItems.map((item, index) => {
            return (
                <option value={item.id} key={index}>{item.item_name}</option>
                )
            })
        const items = Object.values(this.state.items);
        const itemsArray = items.map((item, index) => {
            return (
                <div key ={index} className='reward-items-block'>
                    <p id='itemsArray-title'>{item.item_name}</p>
                    <p id='itemsArray-remove'  onClick={this.removeItem(item.id)}>Remove</p>
                </div>
            )
        })
        
        return(
            <div>
                <div className={`show-reward${this.showingForm()}`}>
                    <div className={`show-reward-section`} >
                        <div className={`show-reward-section-upper`}>
                            <p id='one'>PLEDGE AMOUNT</p>
                            <p id='two'>DETAILS</p>
                            <p id='three'>INCLUDES</p>
                        </div>
                        <div className={`show-reward-section-lower${this.showingForm()}`} onClick={()=>this.editItem()}>
                            <div className='show-reward-section-lower-up'>
                                <div className='up-one'>
                                    <p id='show-reward-p-one'>$ <span>{reward.amount}</span></p> 
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
                                    <button type='button' id='edit-item-right-button' onClick={this.handleModal}>Delete</button>
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
                                                <input type="text" id="reward-title" placeholder='single-limit-edition' value={this.state.title} onChange={this.update('title')}/>
                                            ):(
                                                <input type="text" id="reward-title-invalid" placeholder='single-limit-edition' value={this.state.title} onChange={this.update('title')}/>
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
                                                            <label id='amount-label'>$</label>
                                                            <input type="number" id="reward-amount" value={this.state.amount} onChange={this.updateAmount('amount')}/>
                                                        </div>
                                                    ): (
                                                        <div className='amount-section-invalid'>
                                                            <label id='amount-label'>$</label>
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
                                                <textarea id="reward-description" value={this.state.description} placeholder='Get an early copy - hot off the presses!' onChange={this.update('description')}></textarea>
                                            ):(
                                                <textarea id="reward-description-invalid" value={this.state.description} placeholder='Get an early copy - hot off the presses!' onChange={this.update('description')}></textarea>
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
                                    <div className='form-section'>
                                        <h3>Items</h3>
                                        <p>Build out a list of what you're offering.</p>
                                        <div className='reward-add-item'>
                                            {
                                            items.length > 0? (
                                                    <div className='reward-add-item-block'>
                                                        <p id='TITLE'>TITLE</p>
                                                        {itemsArray}
                                                    </div>
                                            ): (null)
                                            }
                                            {
                                                this.state.showAddItem ? (
                                                    <div className='Add-Item-Block'>
                                                        <h3 id='Add-Item-Block-h3'>Add an existing item</h3>
                                                            <select id='reward-select-item' value='' onChange={this.updateItems()}>
                                                            <option value='' disabled > Choose one </option>
                                                            {allItemsArray}
                                                        </select>
                                                        <p id='new-item-or'>Or</p>
                                                        <h3 id='Add-Item-Block-h3'>Create a new item</h3>
                                                        <input type="text"  id={`item-name-input${this.state.validInputName}`} value={this.state.item_name}
                                                            onChange={this.updateItemName('item_name')} placeholder='Digital photo'/>
                                                        <button type='button' id='new-item-button' onClick={this.createNewItem}> Save </button>
                                                        <p onClick={()=>this.updateshowAddItem()} id='newitem-cancel'>Cancel</p>
                                                    </div>
                                                ):(
                                                    <button type='button' id='new-item-button' onClick={()=> this.updateshowAddItem()}> + New item</button>
                                                )
                                            }
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
                                    <h2>Pledge $ {this.state.amount} or more</h2>
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
                                    {
                                        items.length>0 ?(
                                            <div className='preview-include-block'>
                                                <h5>INCLUDES</h5>
                                                <ul className='preview-inlcude-items'>
                                                    {itemsForPreview}
                                                </ul>
                                            </div>
                                        ): (null)
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