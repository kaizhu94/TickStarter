import React from 'react';

class EditPromotionDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: null,
            limitDate: '',
            // year: '',
            // month: '',
            // day: '',
            // hour: '',
            // minute:'',
            // am: '',
            error: ''
        }
        this.update = this.update.bind(this);
    }
    componentDidMount(){
        let date = this.props.startDate;
        let endDate = this.props.endDate;
        let limitDate = new Date();
        limitDate.setDate(date.getDate() + 60);
        this.setState({
            'startDate': date,
            'endDate': endDate,
            'limitDate': limitDate,
            // 'year': endDate.getFullYear(),
            // 'month': endDate.getMonth(),
            // 'day': endDate.getUTCDate(),
            // 'hour': endDate.getHours() > 11? (endDate.getHours() % 12) : endDate.getHours(),
            // 'minute': endDate.getMinutes(),
            // 'am': endDate.getHours() > 11? false : true
        })
    }
    update(key){
        return e =>{
            // let startDate = this.state.startDate;
            // let limitDate = this.state.limitDate;
            // let year = this.state.year;
            let newDate = new Date();
            const {startDate, endDate, limitDate} = this.state;
            if(key === 'year'){
                debugger
                newDate = endDate;
                newDate.setFullYear(endDate.getFullYear() + (e.currentTarget.value - endDate.getFullYear()));
                debugger
                return this.setState({
                    'endDate': newDate,
                    'error': (newDate.getTime() > limitDate.getTime() || newDate.getTime() < startDate.getTime()) ? 
                            "Date must be in the next 60 days!":''
                                });
            }
            if(key === 'month'){
                newDate = endDate;
                newDate.setMonth(startDate.getMonth() + (e.currentTarget.value - 1 - startDate.getMonth()));
                debugger
                console.log('month: '+ e.currentTarget.value)
                if(newDate.getTime() > limitDate.getTime()
                    || newDate.getTime() < startDate.getTime()){
                    if( e.currentTarget.value < 1 || e.currentTarget.value > 12){
                        return this.setState({
                            // [key]: parseInt(e.currentTarget.value ) - 1,
                            'endDate': newDate,
                            'error': "Invalid month"
                        })
                    }
                    return this.setState({
                        // [key]: parseInt(e.currentTarget.value ) - 1,
                        'endDate': newDate,
                        'error': "Date must be in the next 60 days!"
                                    });
                }else{
                    debugger
                    return this.setState({
                        // [key]: parseInt(e.currentTarget.value ) - 1,
                        'endDate': newDate,
                        'error': ""
                                    });
                }
            }
            return this.setState({[key]: parseInt(e.currentTarget.value)});
            
        } 
        }
    updateAM(key){
        return e => this.setState({[key]: e.currentTarget.value === 'true'}
            );
        }
    render(){
        debugger
        if(!this.state.endDate){
            return null;
        }else{
            const year = this.state.endDate.getFullYear() === 0 ? '':  this.state.endDate.getFullYear();
            const month = this.state.endDate.getMonth() + 1;
            const day = this.state.endDate.getDate();
            const hour = this.state.endDate.getHours() > 11? (this.state.endDate.getHours() % 12) : this.state.endDate.getHours();
            const minute = this.state.endDate.getMinutes();
            const am = this.state.endDate.getHours() > 11? false : true;
            console.log('endDate: '+this.state.endDate);
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
                                                                                            <input type="number" value={day}  onChange={this.update('day')}/>
                                                                                            <input type="number" value={month}   onChange={this.update('month')}/>
                                                                                            <input type="number" value={year}  placeholder='' onChange={this.update('year')}/>
                                                                                            <button><i className="far fa-calendar-alt"></i></button>
                                                                                        </div>
                                                                                        {this.state.error}
                                                                                    </div>
                                                                                    <div className='date-block'>
                                                                                        <div className='date-block-upper'>
                                                                                            <h3>Time</h3>
                                                                                        </div>
                                                                                        <div className='date-block-lower'>
                                                                                            <select name="hour" id="hour" value = {hour}  onChange={this.update('hour')}>
                                                                                                <option value='' disabled  > HH </option>
                                                                                                {
                                                                                                    Array.from({length: 12}, (_, i) => i ).map(num=> {
                                                                                                        return <option value={num}  key={num}> 
                                                                                                            {num < 9 ? `0${num}`: num}
                                                                                                        </option>
                                                                                                    })
                                                                                                }

                                                                                            </select>
                                                                                            <select name="minute" id="minute" value = {minute} onChange={this.update('munite')} >
                                                                                                <option value='' disabled  > MM </option>
                                                                                                {
                                                                                                    Array.from({length: 60}, (_, i) => i ).map(num=> {
                                                                                                        return <option value={num}  key={num}> 
                                                                                                            {num < 10 ? `0${num}`: num}
                                                                                                        </option>
                                                                                                    })
                                                                                                }

                                                                                            </select>
                                                                                            <select name="am" id="am" value = {am}  onChange={this.updateAM('am')}>
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
}

export default EditPromotionDate;
