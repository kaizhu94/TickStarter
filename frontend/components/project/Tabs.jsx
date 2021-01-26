import React from 'react';


class Footers extends React.Component {
    render(){
        const selected = this.props.selectedPage;
        debugger
        const footers = this.props.pages.map((p,index)=>{
            const page = p.pageNumber;
            const klass = index === selected ? 'active' : "";
            debugger
            return (
                <li key={index}
                    className={klass}
                    onClick={() => this.props.onTabChosen(index)}>
                    {page}{' '}
                </li>
            );
        });
        const {currentPage} = this.props;
        return(
            <ul className='footer-tabs'>
                <li onClick={() => this.props.onTabChosen(currentPage-1)}>{'<'}</li>
                {footers}
                <li onClick={() => this.props.onTabChosen(currentPage+1)}>{'>'}</li>
            </ul>
        );
    }
}



 class Pages extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            selectedPage: 0
        }
        this.selectedTab = this.selectedTab.bind(this);
    }
    selectedTab(num) {
        if(num>=0 && num<=2){
            this.setState({selectedPage: num});
        }
      }

    render(){
        const page = this.props.pages[this.state.selectedPage];
        debugger
        return(
            <div>
                <div className='content'>
                    {page.content}
                </div>
                <div className='pages-footer'>
                    <Footers
                        selectedPage={this.state.seletedPage}
                        onTabChosen={this.selectedTab}
                        pages={this.props.pages}
                        currentPage={this.state.selectedPage}
                    />
                </div>
            </div>
        )
    }
}

export default Pages;