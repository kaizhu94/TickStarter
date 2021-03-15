import React from 'react'

class Backing extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.receiveAllRewards();
    }

    render(){
        const { rewards } = this.props
        if(!rewards){
            return null;
        }else{
            debugger
            return(
                <div>
                    hi
                </div>
            )
        }
    }
}

export default Backing;