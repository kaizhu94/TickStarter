import React from 'react';

class Headers extends React.Component {
    render() {
      const selected = this.props.selected;
      const headers = this.props.tabs.map((tab, index) => {
        const title = tab.title;
        const klass = index == selected ? 'reward-header-element-active' : 'reward-header-element';
        return (
          <li
            key={`tabs-${index}`}
            className={klass}
            onClick={() => this.props.updatetab(index)}>
                {
                    index === 0 ? (
                        <span id='rewards-icon'><i className="fas fa-gift"></i></span>
                        ):(null)
                }
                {
                    index === 1 ? (
                        <span id='rewards-icon'><i className="fas fa-list"></i></span>
                        ):(null)
                }
                
            <span>{title}{' '}</span>
          </li>
        );
      });
      return (
        <div className='rewards-items-header'>
            <ul>
                {headers}
            </ul>
        </div>
  
      );
   }
  }

class Rewards extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            tab: 0,
        }
        this.updatetab = this.updatetab.bind(this);
    }
    updatetab(num){
        // let num = this.state.tab;
        // if(this.num === 0){
        //     num++;
        // }else{
        //     num--;
        // }
        this.setState({
            'tab': num
        })
    }
    activeTab(){
        // if(this.)
    }
    render(){
        const tabs = [{title: 'Rewards'}, {title: 'Items'}];
        return (
            <div className='rewards-items-container'>
                <Headers selected = {this.state.tab}
                        tabs = {tabs}
                        updatetab = {this.updatetab}
                                />
            </div>
        )
    }
}

export default Rewards;