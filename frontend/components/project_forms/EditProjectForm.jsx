import React from 'react';


class Headers extends React.Component {
    render() {
        // debugger
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
        }
        this.selectTab = this.selectTab.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidUpdate(prevProps){
        debugger
        if(prevProps.project === undefined && this.props.project){
                this.setState({
                    'id': this.props.project.id,
                    'project_name': this.props.project.project_name,
                    'subtitle': this.props.project.subtitle,
                    'selectedMainCat': this.props.project.category_id,
                    'category_id': this.props.project.category_id,
                    'category_name': this.props.project.category_name,
                })
        }
    }
    componentDidMount(){
        if(this.props.project !== undefined){
            // debugger
            this.setState({
                        'id': this.props.project.id,
                        'project_name': this.props.project.project_name,
                        'subtitle': this.props.project.subtitle,
                        'category_id': this.props.project.category_id,
                        'category_name': this.props.project.category_name
                    })
        }
        this.props.receiveCategories();
    }
   
    selectTab(num) {
        let modalOpen = false;
        if(this.state.isModified){
            modalOpen = true;
            this.props.openModal('unsave')
        }
        if(!modalOpen) this.setState({tab: num});
    }

    update(key){
        // debugger
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

    handleSubmit(e){
        e.preventDefault();
        // debugger
        this.props.updateProject(this.state);
        this.setState({
            'isModified': false
        })
    }

    previous(){
        let currentTab = this.state.tab;
        currentTab = currentTab < 1 ? 0 : currentTab-1;
        this.setState({
            tab: currentTab
        })
    }

    next(){
        let currentTab = this.state.tab;
        currentTab = currentTab >= 2 ? 3 : currentTab+1;
        this.setState({
            tab: currentTab
        })
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
                    <button
                    id='edit-next-button'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: funding <i className="fas fa-chevron-right"></i>
                </button>
                </div>
            )
        }else if(this.state.tab === 1){
            return(
                <div>
                    <button
                    id='edit-next-button'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: rewards <i className="fas fa-chevron-right"></i>
                </button>
                </div>
            )
        }else if(this.state.tab === 2){
            return(
                <div>
                    <button
                    id='edit-next-button'
                    type ='button'
                    onClick={this.next}
                >
                    Next step: background <i className="fas fa-chevron-right"></i>
                </button>
                </div>
            )
        }else{

        }
    }

    render(){
        const tabs = [{title: 'Basics'}, {title: 'Funding'}, 
                    {title: 'Rewards'}, {title: 'Background'}];
        if(!this.props.project || !this.props.maincategories || !this.props.subcategories
            || this.state.selectedMainCat === ''){
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
            debugger
            return (
                <div className = 'Edit-Project'>
                    <Headers selected = {this.state.tab}
                             tabs={tabs}
                             selectTab={this.selectTab}/>
                    <form onSubmit={this.handleSubmit}>
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
                                                        <label >name
                                                        </label>
                                                            <input type="text" 
                                                                placeholder='Alow Bub: Self-care pocket companion for iOS'
                                                                value={this.state.project_name}
                                                                onChange={this.update('project_name')}
                                                                />
                                                    </div>
                                                    <div>
                                                        <label >Subtitle
                                                        </label>
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
                                </div>
                            ):(null)
                        }
                        <div className='edit-button-block'>
                            <div className = 'edit-button-container'> 
                                {
                                    this.state.isModified? (
                                        <div>
                                            <div>
                                                <div></div>
                                                <button type='submit'>Save</button>
                                            </div>
                                        </div>
                                    ): (
                                        <div>
                                            {this.previousButton()}
                                            <div>
                                                <span>No unsaved changes</span>
                                                {this.nextButton()} 
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
}


export default EditProjectForm;