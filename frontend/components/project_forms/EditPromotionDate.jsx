import React from 'react';
import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class EditPromotionDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: null,
            limitDate: '',
            year: '',
            month: '',
            day: '',
            hour: '',
            minute:'',
            second:'',
            am: '',
            error: '',
            limitMessage:'',
            publishMessage:'',
            showCalender: false,
        }
        this.update = this.update.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        this.displayCalender = this.displayCalender.bind(this); 
    }
    componentDidMount(){
        // debugger
        let date = this.props.startDate;
        let endDate = this.props.endDate;
        let limitDate = new Date(date.getTime());
        limitDate.setDate(date.getDate() + 60);
        this.setState({
            'startDate': date,
            'endDate': endDate,
            'limitDate': limitDate,
            'year': endDate.getFullYear(),
            'month': endDate.getMonth() + 1,
            'day': endDate.getUTCDate(),
            'hour': endDate.getHours() ,
            'minute': endDate.getMinutes(),
            'second': endDate.getSeconds(),
            'am': endDate.getHours() > 11? false : true,
            'days': 30
        })
    }
    displayCalender(){
        const flag = !this.state.showCalender;
        this.setState({
            'showCalender': flag
        })
    }
    isValidDate(newDate){
        // debugger
        return newDate.getTime() <= this.state.limitDate.getTime() && newDate.getTime() > this.state.startDate.getTime()
    }
    update(key){
        return e =>{
            // let startDate = this.state.startDate;
            // let limitDate = this.state.limitDate;
            // let year = this.state.year;
            const {startDate, endDate,  year, month, day, hour, minute, second} = this.state;
            let MM = month < 10 ? `0${month}`: month;
            let DD = day < 10 ? `0${day}`: day;
            let HR = hour < 10 ? `0${hour}`: hour;
            let MT = minute < 10 ? `0${minute}`: minute;
            let SD = second < 10 ? `0${second}`: second;
            // debugger
            // let newDateFormat = `${year}-${MM}-${DD}T${HR}:${MT}:${SD}`;
            // let newDate = new Date(newDateFormat);
            // debugger
            // console.log('newDate: '+newDate);
            // console.log('endDate: '+endDate);
            if(key === 'year'){
                // debugger
                // newDate = endDate;
                let newDateFormat = `${e.currentTarget.value}-${MM}-${DD}T${HR}:${MT}:${SD}`;
                let newDate = new Date(newDateFormat);
                newDate.setFullYear(endDate.getFullYear() + (e.currentTarget.value - endDate.getFullYear()));
                console.log('newDate: '+newDate);
                console.log('endDate: '+endDate);
                const isValid = this.isValidDate(newDate);
                // debugger
                return this.setState({
                    'endDate': isValid ? newDate : endDate,
                    'year': newDate.getFullYear(),
                    'error': isValid ? '' : "Date must be in the next 60 days!"
                                });
            }
            if(key === 'month'){
                let MT = e.currentTarget.value < 10 ? `0${e.currentTarget.value}`: e.currentTarget.value;
                let newDateFormat = `${year}-${MT}-${DD}T${HR}:${MT}:${SD}`;
                let newDate = new Date(newDateFormat);
                newDate.setMonth(e.currentTarget.value-1);
                let isValid = this.isValidDate(newDate);
                console.log('newDate: '+newDate);
                console.log('endDate: '+endDate);
                // debugger
                // if(e.currentTarget.value === ''){
                //     return this.setState({
                //         'month': e.currentTarget.value
                //                     });
                // }
                console.log('this.month: '+ this.state.month)
                console.log('month: '+ e.currentTarget.value)
                if(isValid){
                    return this.setState({
                        'endDate': isValid ? newDate : endDate,
                        'month': e.currentTarget.value,
                        'error': isValid ? '' : "Date must be in the next 60 days!"
                                    });
                }else{
                    if(e.currentTarget.value < 1 || e.currentTarget.value >12){
                        // debugger
                        return this.setState({
                            'month': e.currentTarget.value,
                            'error': isValid ? '' : "Invalid Month!"
                                        });
                    }
                    return this.setState({
                        'month': e.currentTarget.value,
                        'error': isValid ? '' : "Date must be in the next 60 days!"
                                    });
                }
            }
            if(key === 'day'){
                let DA = e.currentTarget.value < 10 ? `0${e.currentTarget.value}`: e.currentTarget.value;
                let newDayFormat = `${year}-${MM}-${DA}T${HR}:${MT}:${SD}`;
                let newDayDate = new Date(newDayFormat);
                // debugger
                let isValid = false;
                if(newDayDate){
                    newDayDate.setDate(e.currentTarget.value);
                    isValid = this.isValidDate(newDayDate);
                }
                console.log('newDayDate: '+newDayDate);
                console.log('endDate: '+endDate);
                // debugger
                if(isValid){
                    // debugger
                    return this.setState({
                        'endDate': isValid ? newDayDate : endDate,
                        'day': e.currentTarget.value,
                        'error': isValid ? '' : "Date must be in the next 60 days!"
                                    });
                }else{
                    // debugger
                    if(isNaN(newDayDate.getDate())){
                        // debugger    
                        return this.setState({
                            'day': e.currentTarget.value,
                            'error': "Invalid Date!"
                                        });
                    }
                    return this.setState({
                        'day': e.currentTarget.value,
                        'error': "Date must be in the next 60 days!"
                                    });
                }
            }
            if(key === 'hour'){
                // debugger
                let ho = e.currentTarget.value;
                if(!this.state.am) ho = parseInt(ho) + 12;
                // debugger
                let HO = ho < 10 ? `0${ho}`: ho;
                let newFormat = `${year}-${MM}-${DD}T${HO}:${MT}:${SD}`;
                let newHourDate = new Date(newFormat);
                console.log('newDate: '+newHourDate);
                console.log('endDate: '+endDate);
                // debugger
                return this.setState({[key]: newHourDate.getHours()})
                
            }
            return this.setState({[key]: e.currentTarget.value});
            
        } 
        }
    updateByDay(key){
        return e => {
            if(e.currentTarget.value === ''){
                return this.setState({[key]: e.currentTarget.value,
                    'limitMessage': ''});
            }
            // let newDate = new Date(this.state.startDate.getTime());
            if(e.currentTarget.value < 1 || e.currentTarget.value > 60){
                // debugger
                let value = e.currentTarget.value < 1 ? 1 : 60;
                // newDate.setDate(newDate.getDate() + value);
                // debugger
                return this.setState({[key]: value,
                                // 'endDate': newDate,
                                'limitMessage': 'Days for funding duration must be between 1 and 60.'        
                });
            }
            return this.setState({[key]: e.currentTarget.value,
                                // 'endDate': newDate,
                                'limitMessage': ''});
        }
    }
    updateAM(key){
        return e => this.setState({[key]: e.currentTarget.value === 'true'}
            );
        }


    handlePublish(){
        let newDate = new Date(this.state.startDate.getTime());
        // debugger
        if(this.props.selectTab){
            // debugger
            newDate.setDate(newDate.getDate() + parseInt(this.state.days));
            // debugger
        }else{
            const {startDate, endDate,  year, month, day, hour, minute, second} = this.state;
            let MM = month < 10 ? `0${month}`: month;
            let DD = day < 10 ? `0${day}`: day;
            let HR = hour < 10 ? `0${hour}`: hour;
            let MT = minute < 10 ? `0${minute}`: minute;
            let SD = second < 10 ? `0${second}`: second;
            let newDayFormat = `${year}-${MM}-${DD}T${HR}:${MT}:${SD}`;
            newDate = new Date(newDayFormat);
            // debugger
        }
        // debugger
        if(this.isValidDate(newDate)){
            this.props.updateEndDate(newDate);
            this.setState({
                'publishMessage': 'Your project is published! Use save to sumbit the form.'
            })
        }else{
            this.setState({
                'publishMessage': 'Invalid date'
            })
        }
    }

    updateByCalendar(newDate){
        // debugger
        this.setState({
            'year': newDate.getFullYear(),
            'month': newDate.getMonth()+1,
            'day': newDate.getDate(),
            'showCalender': false
        })
        // this.props.updateEndDate(newDate);
    }

    triggerBorderColor(){
        return this.state.error === ''? 'origin' : 'display'
    }
    render(){
        if(!this.state.endDate){
            return null;
        }else{
            const year = this.state.year === 0 ? '':  this.state.year;
            const month =   this.state.month;
            const day = this.state.day;
            const hour = this.state.hour > 11? (this.state.hour % 12) : this.state.hour;
            const minute = this.state.minute;
            const am = this.state.am
            // console.log('endDate: '+this.state.endDate);
            // debugger
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
                                                                                    <input type="number" value={this.state.days} placeholder='30' id='days' onChange={this.updateByDay('days')}/>
                                                                                    <div className='limitMessage'>{this.state.limitMessage}</div>
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
                                                                    <div>
                                                                        <button type='button' className='publish-button' onClick={this.handlePublish}>Publish</button>
                                                                    </div>
                                                                    <div className='publishMessage'>{this.state.publishMessage}</div>
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
                                                                                            <input type="number" value={day}  onChange={this.update('day')} 
                                                                                               id={`date-element-${this.triggerBorderColor()}`} />
                                                                                            <input type="number" value={month}   onChange={this.update('month')} 
                                                                                               id={`date-element-${this.triggerBorderColor()}`} />
                                                                                            <input type="number" value={year}   onChange={this.update('year')} 
                                                                                               id={`date-element-${this.triggerBorderColor()}`}/>
                                                                                            {
                                                                                                this.state.showCalender? (
                                                                                                    <label    htmlFor='calendar' onClick={this.displayCalender} id='x-lable'>x</label>
                                                                                                ):(
                                                                                                    <label    htmlFor='calendar' onClick={this.displayCalender}><i className="far fa-calendar-alt"></i></label>
                                                                                                )
                                                                                            }
                                                                                            {
                                                                                                this.state.showCalender? (
                                                                                                    <DatePicker selected={this.state.endDate}
                                                                                                                onChange={date => this.updateByCalendar(date)} 
                                                                                                                minDate={this.state.startDate}
                                                                                                                maxDate={this.state.limitDate}
                                                                                                                showDisabledMonthNavigation  
                                                                                                                className= 'calendar'
                                                                                                                id = 'calendar'
                                                                                                                    />
                                                                                                ):(null)
                                                                                            }
                                                                                        </div>
                                                                                        <div className='date-error'>{this.state.error}</div>
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
                                                                                                            {num < 10 ? `0${num}`: num}
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
                                                                    <div>
                                                                        <button type='button' className='publish-button' onClick={this.handlePublish}>Publish</button>
                                                                    </div>
                                                                    <div className='publishMessage'>{this.state.publishMessage}</div>
                                                                </div>
                                                            )
                                                        }
                                                        
                                                    </div>
            )
            }
    }
}

export default EditPromotionDate;
