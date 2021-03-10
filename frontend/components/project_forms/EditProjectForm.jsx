import React from 'react';

import EditTitleImage from './EditTitleImage'
import EditPromotionDate from './EditPromotionDate'
import Rewards from './RewardsContainer'

class Headers extends React.Component {
    render() {
      const selected = this.props.selected;
      const headers = this.props.tabs.map((tab, index) => {
        const title = tab.title;
        const klass = index == selected ? 'active' : '';
        return (
        <div className={`${klass}-div`} key={`tabs-${index}`}>
          <li
            key={`tabs-${index}`}
            className={klass}
            onClick={() => this.props.selectTab(index)}>
                {
                    index === 0 ? (<span><img id="write" src={window.write} ></img></span>):(null)
                }
                {
                    index === 1 ? (<span><img id="chart" src={window.chart} ></img></span>):(null)
                }
                {
                    index === 2 ? (<span><img id="giftbox" src={window.giftbox} ></img></span>):(null)
                }
                {
                    index === 3 ? (<span><img id="book" src={window.book} ></img></span>):(null)
                }
            <span>{title}{' '}</span>
          </li>
        </div>
        );
      });
      return (
          <div className='tab-header-block'>
              <div className='tab-header-container'>
                <ul className='tab-header'>
                    {headers}
                </ul>
              </div>
          </div>
  
      );
   }
  }

class EditProjectForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tab: parseInt(props.match.params.id),
            isModified: false,
            id: '',
            project_name: '',
            subtitle:  '',
            category_id: '',
            category_name: '',
            selectedMainCat: '',
            location_id: '',
            goal: null,
            risks: null,
            description: null,
            selectedDateTab: false,

            launch_date: null,
            end_date: null,
            published: null,

            disabledBottomButton: false,
        }
        this.selectTab = this.selectTab.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitleImage = this.updateTitleImage.bind(this);
        this.updateDateTab =this.updateDateTab.bind(this);
        this.updateEndDate = this.updateEndDate.bind(this);
        this.redirectToBoard = this.redirectToBoard.bind(this);
        this.updateDisabledBottomButton = this.updateDisabledBottomButton.bind(this);
        // this.handleFile = this.handleFile.bind(this);
        // this.triggerOrNot = this.triggerOrNot.bind(this);
    }
    componentDidUpdate(prevProps){
        if(prevProps.tabId !== this.props.tabId){
                this.setState({
                    tab: parseInt(this.props.match.params.id),
                    isModified: false,
                    // 'id': this.props.project.id,
                    // 'project_name': this.props.project.project_name,
                    // 'subtitle': this.props.project.subtitle,
                    // 'selectedMainCat': this.props.project.category_id,
                    // 'category_id': this.props.project.category_id,
                    // 'category_name': this.props.project.category_name,
                    // 'location_id': this.props.project.location_id,
                    
                })
        }
    }
    componentDidMount(){
        // debugger
        this.props.receiveCategories();
        this.props.receiveLocations();
        this.props.receiveProject(this.props.match.params.projectId)
            .then(() => {
                let startDate = new Date();
                let endDate = new Date(startDate.getTime());
                endDate.setDate(startDate.getDate() + 30);
                this.setState({
                                'id': this.props.project.id,
                                'project_name': this.props.project.project_name,
                                'subtitle': this.props.project.subtitle,
                                'selectedMainCat': this.props.project.category_id,
                                'category_id': this.props.project.category_id,
                                'category_name': this.props.project.category_name,
                                'location_id': this.props.project.location_id,
                                'goal': this.props.project.goal,
                                'risks': this.props.project.risks,
                                'description': this.props.project.description,
                                'launch_date': this.props.project.launch_date ? new Date(this.props.project.launch_date) : startDate,
                                'end_date': this.props.project.end_date ? new Date(this.props.project.end_date): endDate,
                                'published': this.props.project.published
                            })
            })
    }

    updateTitleImage(file){
        this.setState({ title_image: file
                    })
    }

    updateDateTab(){
        // debugger
        const value = !this.state.selectedDateTab;
        this.setState({'selectedDateTab': value,
            'isModified': true}
            );
    }

    updateDisabledBottomButton(){
        // debugger
        // e.preventDefault();
        const value = !this.state.disabledBottomButton;
        const isModified = !this.state.isModified;
        this.setState({'disabledBottomButton': value,
                        'isModified': isModified
            }
            );
    }

    updateEndDate(endDate){
        // debugger
        this.setState({
            'end_date': endDate,
            'published': true,
            'isModified': true
        })
    }

    selectTab(num) {
        // debugger
        let modalOpen = false;
        if(this.state.isModified && num !== this.state.tab){
            modalOpen = true
            switch (num){
                case 0:
                    this.props.openModal('unsave-tab-0');
                    break;
                case 1:
                    this.props.openModal('unsave-tab-1');
                    break;
                case 2:
                    this.props.openModal('unsave-tab-2');
                    break;
                default:
                    this.props.openModal('unsave-tab-3');
            }
        }
        this.setState({
            'isModified': false,
            'disabledBottomButton': false

        })
        if(!modalOpen) this.props.history.push(`/projects/${this.state.id}/edit/${num}`);
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value,
            'isModified': true}
            );
        }
        
    updateMainCat(key1, key2){
        return e => this.setState({[key1]: parseInt(e.currentTarget.value),
            [key2]: parseInt(e.currentTarget.value),
            'selectedMainCat':e.currentTarget.value,
            'isModified': true}
            );
        }
        
    updateSubCat(key){
        // debugger
        return e =>{  
            // debugger
        let id = '';
        if(e.currentTarget.value === '0'){
            id = this.state.selectedMainCat;
        }else{
            id = e.currentTarget.value;
        }
        return this.setState({[key]:  parseInt(id),
        'maincatId':'',
        'isModified': true}
        );
        }
    }

    updateFunding(key){
        return e =>{  
            // debugger
        // const regexp = /^[0-9\b]+(.[0-9\b]+)$/;
        let value = e.currentTarget.value; 
        // if(regexp.test(value)){
        //     debugger
        // }
        // debugger
        if(value === ''){
            return this.setState({[key]:  value,
                'maincatId':'',
                'isModified': true}
                );
        }else{
            return this.setState({[key]:  Math.round(value),
            'maincatId':'',
            'isModified': true}
            );
        }
    }
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        let formData = new FormData();
        // debugger
        // formData.append('project[id]', this.state.id);
        formData.append('project[project_name]', this.state.project_name);
        formData.append('project[subtitle]', this.state.subtitle);
        formData.append('project[category_id]', this.state.category_id);
        formData.append('project[location_id]', this.state.location_id);
        formData.append('project[goal]', this.state.goal);
        formData.append('project[risks]', this.state.risks);
        formData.append('project[description]', this.state.description);
        if(this.state.published){
            formData.append('project[published]', this.state.published);
            formData.append('project[launch_date]', this.state.launch_date);
            formData.append('project[end_date]', this.state.end_date);
        }
        // // debugger
        // if (this.state.photo.length !== 0) {
        //     formData.append('project[photo]', this.state.photo);
        //   }
        this.props.updateProject(this.state.id, formData);
        this.setState({
            'isModified': false
        })
    }

    hidebutton(){
        return (this.state.openNewItem || this.state.openNewReward) ? '-hide': '';
    }

    previous(){
        let currentTab = this.state.tab;
        currentTab = currentTab < 1 ? 0 : currentTab-1;
        this.setState({
            tab: currentTab
        })
        this.props.history.push(`/projects/${this.state.id}/edit/${currentTab}`);
    }

    next(){
        let currentTab = this.state.tab;
        currentTab = currentTab >= 2 ? 3 : currentTab+1;
        this.setState({
            tab: currentTab
        })
        this.props.history.push(`/projects/${this.state.id}/edit/${currentTab}`);
    }

    previousButton(){
        if(this.state.tab === 1){
            return(
                <button id = 'edit-pre-button'
                        onClick={this.previous}
                        type = 'button'>
                    <i className="fas fa-chevron-left"></i>  <span>Back to basics</span>
                </button>
            )
        }else if(this.state.tab === 2){
            return(
                <button id = 'edit-pre-button'
                        onClick={this.previous}
                        type = 'button'>
                    <i className="fas fa-chevron-left"></i>  <span>Back to funding</span>
                </button>
            )   
        }else if(this.state.tab === 3){
            return(
                <button id = 'edit-pre-button'
                        onClick={this.previous}
                        type = 'button'>
                    <i className="fas fa-chevron-left"></i>  <span>Back to rewards</span>
                </button>
            )   
        }else{
            return(
                <div>
                </div>
            )
        }
    }

    nextButton(){
        if(this.state.tab === 0){
            return(
                <div>
                    <span>No unsaved changes    </span>
                    <button
                    id='edit-next-button'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: funding <span id='add-space-in-button'><i className="fas fa-chevron-right"></i></span>
                </button>
                </div>
            )
        }else if(this.state.tab === 1){
            return(
                <div>
                    <span>No unsaved changes    </span>
                    <button
                    id='edit-next-button'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: rewards <span id='add-space-in-button'><i className="fas fa-chevron-right"></i></span>
                </button>
                </div>
            )
        }else if(this.state.tab === 2){
            return(
                <div>
                    <span>No unsaved changes    </span>
                    <button
                    id='edit-next-button'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: background <span id='add-space-in-button'><i className="fas fa-chevron-right"></i></span>
                </button>
                </div>
            )
        }else{
            return null
        }
    }

    redirectToBoard(){
        // debugger
        this.props.history.push(`/projects/${this.state.id}/dashboard`);
    }

    nextButtonOnTop(){
        if(this.state.tab === 0){
            return(
                <div className='top-button-conatiner'>
                    <button
                    id='edit-next-button-top'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: funding 
                </button>
                </div>
            )
        }else if(this.state.tab === 1){
            return(
                <div className='top-button-conatiner'>
                    <button
                    id='edit-next-button-top'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: rewards 
                </button>
                </div>
            )
        }else if(this.state.tab === 2){
            return(
                <div className='top-button-conatiner'>
                    <button
                    id='edit-next-button-top'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: background 
                </button>
                </div>
            )
        }else{
            return(
                <div className='top-button-conatiner'>
                    <button
                    id='edit-next-button-top'
                    type ='button'
                    onClick={this.redirectToBoard}
                >
                    Exit
                    </button>
                </div>
            )
        }
    }

    render(){
        // debugger
        const tabs = [{title: 'Basics'}, {title: 'Funding'}, 
                    {title: 'Rewards'}, {title: 'Background'}];
        if(!this.props.project || !this.props.maincategories || !this.props.subcategories
            || this.state.selectedMainCat === '' || !this.props.locations){
            return null;
        }else{
            const maincategoriesID = Object.keys(this.props.maincategories);
            const allSubIDs = Object.keys(this.props.subcategories);
            const maincategories = Object.values(this.props.maincategories);
            const allSubcategories = Object.values(this.props.subcategories);
            const subcategories = [];
            let selectedMainCat = parseInt(this.state.selectedMainCat)
            if(allSubIDs.includes(this.props.project.category_id.toString())){
                selectedMainCat = this.props.subcategories[this.props.project.category_id].parent_id;
            }
            allSubcategories.forEach(sub => {
                if(sub.parent_id === selectedMainCat) {
                   return  subcategories.push(sub)
                }
            })
            let maincatId = '';
            if(maincategoriesID.includes(this.state.selectedMainCat.toString())){
                maincatId = this.state.selectedMainCat;
            }else{
                maincatId = this.props.subcategories[this.props.project.category_id].parent_id;
            }

            const locations = Object.values(this.props.locations);

            // debugger
            return (
                <div className = 'Edit-Project'>
                    <Headers selected = {this.state.tab}
                             tabs={tabs}
                             selectTab={this.selectTab}/>
                    <form onSubmit={this.handleSubmit} id = 'edit-form'>
                        {
                            this.state.disabledBottomButton ? (
                                null
                            ) : (
                                this.state.isModified? (
                                    <div className='top-button-conatiner'>
                                            <button type='submit' id='edit-next-button-top'>Save</button>
                                    </div>
                                ): (
                                    <div className = 'edit-buttons'>
                                        <div>
                                            {this.nextButtonOnTop()} 
                                        </div>
                                    </div>
                                )
                            )
                        }
                        {
                            this.state.tab == 0? (
                                <div>
                                    <div className='start-from-basic'>
                                        <div className= 'start-block'>
                                            <h1>Start from the basics</h1>
                                            <p>Let people easily understand your project.</p>
                                        </div>
                                    </div>
                                    <div className='project-name-section'>
                                        <div className = 'project-name-container'>
                                            <div className = 'left'>
                                                <h2>Project name</h2>
                                                <div className='p-block'>
                                                    <p>Write a clear, short title to let people quickly understand the gist of the project.</p>
                                                    <p>The final day of your campaign is as crucial as the first. Avoid overlapping either of them with a holiday. We believe Thursday is the best day to end your campaign, between the late morning and early afternoon.</p>
                                                </div>
                                            </div>
                                            <div className='right'>
                                                <div className = 'right-container'>
                                                    <div>
                                                        <label >Title</label>
                                                            <input type="text" 
                                                                placeholder='Alow Bub: Self-care pocket companion for iOS'
                                                                value={this.state.project_name}
                                                                onChange={this.update('project_name')}
                                                                />
                                                    </div>
                                                    <div>
                                                        <label >Subtitle </label>
                                                            <textarea type="text"
                                                                placeholder='Gently brings awareness to self-care activities, using encouraging push notifications, rather than guilt or shame.'
                                                                value={this.state.subtitle}
                                                                onChange={this.update('subtitle')}
                                                                />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className= 'project-category-section'>
                                        <div className = 'project-category-container'>
                                            <div className = 'left'>
                                                <h2> Project category</h2>
                                                <div className='p-block'>
                                                    <p>Choose the category that is most consistent with your project.</p>
                                                    <p>Think about where supporters might find it. Find more specific communities by selecting subcategories.</p>
                                                    <p>You can change the category and subcategory even after the project goes live.</p>
                                                    <p>The final day of your campaign is as crucial as the first. Avoid overlapping either of them with a holiday. We believe Thursday is the best day to end your campaign, between the late morning and early afternoon.</p>
                                                </div>
                                            </div>
                                            <div className ='right'>
                                                <div className = 'category-right-container'>
                                                    <select name="category_id" id="category" value = {maincatId === ''? this.state.category_id : maincatId}  onChange={this.updateMainCat('category_id', 'selectedMainCat') }>
                                                        <option value='0' disabled hidden > {this.props.project.category_name} </option>
                                                        <option value='' disabled  > category </option>
                                                        {
                                                            maincategories.map((c, i) => {
                                                                return  <option value={c.id} key={i}>{c.category_name}</option>
                                                                })
                                                        }
                                                    </select>
                                                    <select name="category_id" id="sub_category" value = {this.state.category_id}  onChange={this.updateSubCat('category_id')}>
                                                        <option value='0' disabled> Subcategory (Optionnal) </option>
                                                        <option value='0' > --No Subcategories-- </option>
                                                        {
                                                            subcategories.map((c, i) => {
                                                                return  <option value={c.id} key={i}>{c.category_name}</option>
                                                                })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className= 'project-location-section'>
                                        <div className = 'project-category-container'>
                                            <div  className = 'left'>
                                                    <h2>Project location</h2>
                                                    <div className='p-block'>
                                                        <p>Enter the best location description of the project location.</p>
                                                        <p>The final day of your campaign is as crucial as the first. Avoid overlapping either of them with a holiday. We believe Thursday is the best day to end your campaign, between the late morning and early afternoon.</p>
                                                    </div>
                                            </div>
                                            <div className ='right'>
                                                    <div className='location-right-container'>
                                                        <select name="location_id" id="location" value = {this.state.location_id}  onChange={this.updateSubCat('location_id')}>
                                                            {
                                                                locations.map((c, i) => {
                                                                    return  <option value={c.id} key={i}>{c.location}</option>
                                                                    })
                                                            }
                                                        </select>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className= 'project-image-section'>
                                        <div className= 'project-category-container'>
                                            <div className = 'left'>
                                                <h2>Project image</h2>
                                                <div className='p-block'>
                                                    <p>Add images that can clearly represent your project.</p>
                                                    <p>Choose an image that looks fine in different sizes. It will appear in different places in different sizes: on your project page, on the Kickstarter website and mobile apps, and (when sharing) on ​​social channels.</p>
                                                    <p>Try to avoid banners, badges, text materials, etc., because they may not be readable when they are small.</p>
                                                    <p>The image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</p>
                                                    <p>The final day of your campaign is as crucial as the first. Avoid overlapping either of them with a holiday. We believe Thursday is the best day to end your campaign, between the late morning and early afternoon.</p>
                                                </div>
                                            </div>
                                            <div className ='right'>
                                                        <EditTitleImage project = {this.props.project} 
                                                                        updateProject = {this.props.updateProjectImage}
                                                                        updateTitleImage = {this.updateTitleImage}
                                                                        openModal = {this.props.openModal}
                                                                        />
                                            </div>
                                        </div>
                                    </div>
                                    <div className= 'project-release-section'>
                                        <div className= 'project-category-container'>
                                            <div className = 'left'>
                                                <h2>Project release</h2>
                                                <div className='p-block'>
                                                    <p>Publish your project, and set a time limit for your promotion. After set a date, use publish button to update the date then save the form.</p>
                                                    <p>The final day of your campaign is as crucial as the first. Avoid overlapping either of them with a holiday. We believe Thursday is the best day to end your campaign, between the late morning and early afternoon.</p>
                                                </div>
                                            </div>
                                            <div className ='right'>
                                                <EditPromotionDate 
                                                    selectTab={this.state.selectedDateTab}
                                                    updateDateTab={this.updateDateTab}
                                                    startDate = {this.state.launch_date}
                                                    endDate = {this.state.end_date} 
                                                    updateEndDate={this.updateEndDate}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`edit-button-block${this.hidebutton()}`}>
                                        <div className = 'edit-button-container'> 
                                            {
                                                this.state.isModified? (
                                                    this.state.disabledBottomButton?(null):(
                                                        <div className = 'edit-buttons'>
                                                                <div></div>
                                                                <button type='submit' id='edit-save-button'>Save</button>
                                                        </div>
                                                    )
                                                ): (
                                                    this.state.disabledBottomButton?(null):(
                                                        <div className = 'edit-buttons'>
                                                            {this.previousButton()}
                                                            <div>
                                                                {this.nextButton()} 
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ):(null)
                        }
                        {
                            this.state.tab == 1? ( 
                                <div>
                                    <div className='start-from-basic'>
                                        <div className= 'start-block'>
                                            <h1>Set your funding goal</h1>
                                            <p>Let people know how much support you need.</p>
                                        </div>
                                    </div>
                                     <div className= 'project-funding-section'>
                                        <div className= 'project-funding-container'>
                                            <div className = 'left'>
                                                <h2>Fundraising goal</h2>
                                                <div className='p-block'>
                                                    <p>Set an achievable goal that covers what is needed to complete the project.</p>
                                                    <p>The fundraising activity is "all-or-nothing". If you do not reach your goal, you will not receive any funds.</p>
                                                    <p>The final day of your campaign is as crucial as the first. Avoid overlapping either of them with a holiday. We believe Thursday is the best day to end your campaign, between the late morning and early afternoon.</p>
                                                </div>
                                            </div>
                                            <div className ='right'>
                                                <div className='funding-right-container'>
                                                    <label>Goal amount</label>
                                                    <div className='funding-div'>
                                                        <label id='dollar-sign'>US$</label>
                                                        <input type='number' placeholder='500'
                                                         id='founding-input' 
                                                         value={this.state.goal}
                                                         onChange={this.updateFunding('goal')}/> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`edit-button-block${this.hidebutton()}`}>
                                        <div className = 'edit-button-container'> 
                                            {
                                                this.state.isModified? (
                                                    this.state.disabledBottomButton?(null):(
                                                        <div className = 'edit-buttons'>
                                                                <div></div>
                                                                <button type='submit' id='edit-save-button'>Save</button>
                                                        </div>
                                                    )
                                                ): (
                                                    this.state.disabledBottomButton?(null):(
                                                        <div className = 'edit-buttons'>
                                                            {this.previousButton()}
                                                            <div>
                                                                {this.nextButton()} 
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ) : (null)
                        }
                       
                        {
                            this.state.tab == 3? ( 
                                <div>
                                    <div className='start-from-basic'>
                                        <div className= 'start-block'>
                                            <h1>Introduce your project</h1>
                                            <p>Tell people why they should be excited about your project. Be specific but also clear and short.</p>
                                        </div>
                                    </div>
                                    <div className= 'project-description-section'>
                                        <div className= 'project-category-container'>
                                            <div className = 'left'>
                                                    <h2>Project description</h2>
                                                    <div className='p-block'>
                                                        <p>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know.</p>
                                                    </div>
                                            </div>
                                            <div className ='right'>
                                                <div className='location-right-container'>
                                                    <textarea  id="risks" cols="30" rows="10" 
                                                    onChange={this.update('description')}
                                                    value = {this.state.description}
                                                    >

                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className= 'project-risk-section'>
                                        <div className= 'project-category-container'>
                                            <div className = 'left'>
                                                <h2>Risks and challenges</h2>
                                                <div className='p-block'>
                                                    <p>Be honest about the potential risks and challenges of this project, and how you plan to overcome these risks and challenges to complete it.</p>
                                                    <p>The final day of your campaign is as crucial as the first. Avoid overlapping either of them with a holiday. We believe Thursday is the best day to end your campaign, between the late morning and early afternoon.</p>
                                                </div>
                                            </div>
                                            <div className ='right'>
                                                <div className='location-right-container'>
                                                    <textarea  id="risks" cols="30" rows="10" 
                                                    onChange={this.update('risks')}
                                                    value = {this.state.risks}
                                                    placeholder = "Common risks and challenges you may wangt to address"
                                                    >

                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`edit-button-block${this.hidebutton()}`}>
                                        <div className = 'edit-button-container'> 
                                            {
                                                this.state.isModified? (
                                                    this.state.disabledBottomButton?(null):(
                                                        <div className = 'edit-buttons'>
                                                                <div></div>
                                                                <button type='submit' id='edit-save-button'>Save</button>
                                                        </div>
                                                    )
                                                ): (
                                                    this.state.disabledBottomButton?(null):(
                                                        <div className = 'edit-buttons'>
                                                            {this.previousButton()}
                                                            <div>
                                                                {this.nextButton()} 
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ) : (null)
                        }
                      
                    </form>
                        {
                            this.state.tab == 2? (
                                <div>
                                     <div className='add-rewards-section'>
                                        <div className= 'start-block'>
                                            <h1>Add your rewards</h1>
                                            <p>Offer simple, meaningful ways to bring backers closer to your project and celebrate it coming to life.</p>
                                        </div>
                                    </div>
                                    <div className='rewards-items-section'>
                                        <Rewards updateDisabledBottomButton = {this.updateDisabledBottomButton}
                                                disabledBottomButton = {this.state.disabledBottomButton}
                                                project= {this.props.project}/>
                                    </div>
                                </div>
                            ):(null) 
                        }
                        <div className={`edit-button-block${this.hidebutton()}`}>
                            <div className = 'edit-button-container'> 
                                {
                                    this.state.isModified? ( null
                                        // this.state.disabledBottomButton?(null):(
                                        //     <div className = 'edit-buttons'>
                                        //             <div></div>
                                        //             <button type='submit' id='edit-save-button'>Save</button>
                                        //     </div>
                                        // )
                                    ): (
                                        this.state.tab === 2? (
                                            this.state.disabledBottomButton?(null):(
                                                <div className = 'edit-buttons'>
                                                    {this.previousButton()}
                                                    <div>
                                                        {this.nextButton()} 
                                                    </div>
                                                </div>
                                            )
                                        ):(null)
                                    )
                                }
                            </div>
                        </div>
                </div>
            )
        }
    }
}


export default EditProjectForm;