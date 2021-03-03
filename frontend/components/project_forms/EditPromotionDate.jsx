import React from 'react';

class EditPromotionDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            year: '',
            month: '',
            day: '',
            hour: '',
            minute:'',
            am: '',
        }
    }
    componentDidMount(){
        let date = this.props.startDate;
        let endDate = this.props.endDate;
        this.setState({
            'startDate': date,
            'endDate': endDate,
            'year': endDate.getFullYear(),
            'month': endDate.getMonth(),
            'day': endDate.getUTCDate(),
            'hour': endDate.getHours() > 11? (endDate.getHours() - 13) : endDate.getHours(),
            'minute': endDate.getMinutes(),
            'am': endDate.getHours() > 11? false : true
        })
    }
    update(key){
        return e => this.setState({[key]: parseInt(e.currentTarget.value)}
            );
        }
    updateAM(key){
        return e => this.setState({[key]: e.currentTarget.value === 'true'}
            );
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
                                                                                <input type="number" defaultValue={30} id='days'/>
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
                                                                                        <input type="number" value={this.state.day} onChange={this.update('day')}/>
                                                                                        <input type="number" value={this.state.month + 1} onChange={this.update('month')}/>
                                                                                        <input type="number" value={this.state.year} onChange={this.update('year')}/>
                                                                                        <button><i className="far fa-calendar-alt"></i></button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='date-block'>
                                                                                    <div className='date-block-upper'>
                                                                                        <h3>Time</h3>
                                                                                    </div>
                                                                                    <div className='date-block-lower'>
                                                                                        <select name="hour" id="hour" value = {this.state.hour}  onChange={this.update('hour')}>
                                                                                            <option value='' disabled  > HH </option>
                                                                                            {
                                                                                                Array.from({length: 12}, (_, i) => i ).map(num=> {
                                                                                                    return <option value={num}  key={num}> 
                                                                                                        {num < 0 ? `0${num+1}`: num+1}
                                                                                                     </option>
                                                                                                })
                                                                                            }

                                                                                        </select>
                                                                                        <select name="minute" id="minute" value = {this.state.minute} onChange={this.update('munite')} >
                                                                                            <option value='' disabled  > MM </option>
                                                                                            {
                                                                                                Array.from({length: 60}, (_, i) => i ).map(num=> {
                                                                                                    return <option value={num}  key={num}> 
                                                                                                        {num < 10 ? `0${num}`: num}
                                                                                                     </option>
                                                                                                })
                                                                                            }

                                                                                        </select>
                                                                                        <select name="am" id="am" value = {this.state.am}  onChange={this.updateAM('am')}>
                                                                                            <option value='true'  > AM </option>
                                                                                            <option value='false'  > PM </option>
                                                                                            

                                                                                        </select>
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
