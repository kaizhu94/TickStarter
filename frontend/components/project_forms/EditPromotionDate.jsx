import React from 'react';

class EditPromotionDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            year: null,
            month: null,
            day: null,
            hour: null,
            minute:null
        }
    }
    render(){
        debugger
        return (
            <div className= 'project-promotion-container'>
                                                    {
                                                        this.props.selectTab ? (
                                                            <div >
                                                                <div className='selected-date-block'>
                                                                    <div className='selected-date-container'>
                                                                        <div className='selected-date-upper'>
                                                                            <i className="fas fa-dot-circle" id ='selected-dot'></i> Fixed number of days
                                                                        </div>
                                                                        <div className='selected-date-lower'>
                                                                            <div className='selected-date-lower-container'>
                                                                                <h3>Enter number of days</h3>
                                                                                <input type="number" defaultValue='30' id='days'/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='selected-date-block' onClick={this.props.updateDateTab}>
                                                                    <div className='selected-date-container'>
                                                                        <div className='selected-date-upper'>
                                                                            <div id='circle-dot'></div> End on a specific date & time
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ):(
                                                            <div >
                                                                <div className='selected-date-block' onClick={this.props.updateDateTab}>
                                                                    <div className='selected-date-container'>
                                                                        <div className='selected-date-upper'>
                                                                        <div id='circle-dot'></div> Fixed number of days
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='selected-date-block' >
                                                                    <div className='selected-date-container'>
                                                                        <div className='selected-date-upper'>
                                                                                <i className="fas fa-dot-circle" id ='selected-dot'></i>  End on a specific date & time
                                                                        </div>
                                                                        <div className='selected-date-lower'>
                                                                            <div className='selected-date-lower-container'>
                                                                                <div className='date-block'>
                                                                                    <div className='date-block-upper'>
                                                                                        <h3>Day</h3>
                                                                                        <h3>Month</h3>
                                                                                        <h3>Year</h3>
                                                                                    </div>
                                                                                    <div className='date-block-lower'>
                                                                                        <input type="number"/>
                                                                                        <input type="number"/>
                                                                                        <input type="number"/>
                                                                                        <button><i className="far fa-calendar-alt"></i></button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='date-block'>
                                                                                    <div className='date-block-upper'>
                                                                                        <h3>Time</h3>
                                                                                    </div>
                                                                                    <div className='date-block-lower'>
                                                                                        <input type="number"/>
                                                                                        <input type="number"/>
                                                                                        <input type="number"/>
                                                                                        <h3>Eastern Daylight Time</h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        )
                                                    }
                                                    
                                                </div>
        )
    }
}

export default EditPromotionDate;
