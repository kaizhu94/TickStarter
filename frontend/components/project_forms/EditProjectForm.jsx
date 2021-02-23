import React from 'react';
import { Link } from 'react-router-dom'


class Headers extends React.Component {
    render() {
        // debugger
      const selected = this.props.selected;
      const headers = this.props.tabs.map((tab, index) => {
        const title = tab.title;
        const klass = index == selected ? 'active' : '';
        debugger
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
        this.state = {
            tab: props.match.params.id
        }
        this.selectTab = this.selectTab.bind(this);
    }
    componentDidMount(){
        this.props.receiveProject(this.props.match.params.projectId)
    }
    selectTab(num) {
        this.setState({tab: num});
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
                                                                value={this.props.project.project_name}
                                                                />
                                                    </div>
                                                    <div>
                                                        <label >Subtitle
                                                        </label>
                                                            <textarea type="text"
                                                                placeholder='Gently brings awareness to self-care activities, using encouraging push notifications, rather than guilt or shame.'
                                                                value={this.props.project.subtitle}
                                                                />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ):(null)
                        }
                    </form>
                </div>
            )
        }
    }
}


export default EditProjectForm;