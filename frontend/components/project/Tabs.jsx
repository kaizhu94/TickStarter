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
        return(
            <ul className='footer-tabs'>
                {footers}
            </ul>
        );
    }
}



 class Pages extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            seletedPage: 0
        }
        this.seletedTab = this.seletedTab.bind(this);
    }
    seletedTab(num) {
        this.setState({selectedPage: num});
      }

    render(){
        const page = this.props.pages[this.state.seletedPage];

        return(
            <div>
                <div className='content'>
                    {page.content}
                </div>
                <div className='pages-footer'>
                    <Footers
                        selectedPage={this.state.seletedPage}
                        onTabChosen={this.seletedTab}
                        pages={this.props.pages}
                    />
                </div>
            </div>
        )
    }
}

export default Pages;