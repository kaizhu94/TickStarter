import React from 'react';
import { Link } from 'react-router-dom'


class Headers extends React.Component {
    render() {
        // debugger
      const selected = this.props.selected;
      const headers = this.props.tabs.map((tab, index) => {
        const title = tab.title;
        const klass = index == selected ? 'active' : '';
        return (
        <div className={`${klass}-div`}>
          <li
            key={index}
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
        debugger
        this.state = {
            tab: parseInt(props.match.params.id),
            isModified: false,
            project_name: '',
            subtitle:  ''
        }
        this.selectTab = this.selectTab.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
    }
    componentDidUpdate(prevProps){
        if(prevProps.project === undefined && this.props.project){
                this.setState({
                    'project_name': this.props.project.project_name,
                    'subtitle': this.props.project.subtitle
                })
        }
    }
    componentDidMount(){
        debugger
        if(this.props.project !== undefined){
            debugger
            this.setState({
                        'project_name': this.props.project.project_name,
                        'subtitle': this.props.project.subtitle
                    })
        }
        // this.props.receiveProject(this.props.match.params.projectId)
    }
   
    selectTab(num) {
        this.setState({tab: num});
    }

    update(key){
        return e => this.setState({[key]: e.currentTarget.value,
                                'isModified': true});
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
                    <i class="fas fa-chevron-left"></i>  <span>Back to basics</span>
                </button>
            )
        }else if(this.state.tab === 2){
            return(
                <button id = 'edit-pre-button'
                        onClick={this.previous}
                        type = 'button'>
                    <i class="fas fa-chevron-left"></i>  <span>Back to funding</span>
                </button>
            )   
        }else if(this.state.tab === 3){
            return(
                <button id = 'edit-pre-button'
                        onClick={this.previous}
                        type = 'button'>
                    <i class="fas fa-chevron-left"></i>  <span>Back to rewards</span>
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
                    Next step: funding <i class="fas fa-chevron-right"></i>
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
                    Next step: rewards <i class="fas fa-chevron-right"></i>
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
                    Next step: background <i class="fas fa-chevron-right"></i>
                </button>
                </div>
            )
        }else{

        }
    }

    render(){
        const tabs = [{title: 'Basics'}, {title: 'Funding'}, 
                    {title: 'Rewards'}, {title: 'Background'}];
        if(!this.props.project){
            debugger
            return null;
        }else{
            debugger
            return (
                <div className = 'Edit-Project'>
                    <Headers selected = {this.state.tab}
                             tabs={tabs}
                             selectTab={this.selectTab}/>
                    <form>
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