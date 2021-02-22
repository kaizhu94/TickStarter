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

    selectTab(num) {
        this.setState({tab: num});
    }

    render(){
        const tabs = [{title: 'Basics'}, {title: 'Funding'}, 
                    {title: 'Rewards'}, {title: 'Background'}]
        debugger
        return (
            <div className = 'Edit-Project'>
                <Headers selected = {this.state.tab}
                         tabs={tabs}
                         selectTab={this.selectTab}/>
            </div>
        )
    }
}


export default EditProjectForm;