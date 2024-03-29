import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
// import VisualizerItem from '../VisualizerItem/VisualizerItem';
import moment from 'moment';



export class VisualizerList extends PureComponent {
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_HOURS", payload: this.props.clicked });
        console.log('in cDM VizualizerList');
        // this.payrollCalculator([this.props.userHistory]);
        // this.state.sickAndSafe.push(this.props.clicked.previous_year_carryover)

    }

    clickHandler = () => {
        console.log('In the Big Dumb Button! this.props.clicked:', this.props.clicked, ", this props.userHistory:", [this.props.userHistory], 'this.props.user.previous_year_carryover:', this.props.user.previous_year_carryover, 'daysSinceStart:', this.payrollCalculator.daysSinceStart);

    }




    payrollCalculator = () => {
        let arrayToCalculate = this.props.userHistory
        //this is the array of objects in
        const calculatorArray = [];
        //this is the array to return
        let sickTime = this.props.clicked.previous_year_carryover;
        let towardsAccrual = 0;
        let charged = 0;
        let accruedThisYear = 0;
        //these are reference variables that record what was going on before each entry gets added.
        console.log('in payrollCalculator, arrayToCalculate=', arrayToCalculate);
        //start loop
        for (let i = 0; i < arrayToCalculate.length; i++) {
            let formattedDate = moment(arrayToCalculate[i].start).format('MMMM Do YYYY');
            let probationary = false;
            let currentDate = moment(arrayToCalculate[i].start)
            let startDate = moment(this.props.clicked.hire_date);
            console.log(startDate);
            let daysSinceStart = currentDate.diff(startDate, 'days');
            console.log("daysSinceStart:", daysSinceStart);
            if (daysSinceStart < 90){
                probationary = true;
            }
            let arrayItem = {
                date: formattedDate,
                sickAndSafe: 0,
                accrual: 0,
                chargeable: 0
            }
            //this is the object that needs to be filled in and added to the array that will feed into the graphs
            if (arrayToCalculate[i].payroll_code === 1 && arrayToCalculate[i].mpls ) {
                console.log('recording regular hours');
                towardsAccrual += arrayToCalculate[i].hours;
                if (accruedThisYear >= 48){
                    towardsAccrual = 0;
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                } else if (towardsAccrual >= 30 && arrayItem.sickAndSafe < 80 ) {
                    towardsAccrual = towardsAccrual - 30;
                    sickTime += 1;
                    accruedThisYear += 1;
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                } else if (towardsAccrual >= 30 && arrayItem.sickAndSafe >= 80 ){
                    towardsAccrual = 0;
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                } else if (sickTime >= 80 ){
                    towardsAccrual = 0;
                    arrayItem.sickAndSafe = 80;
                    arrayItem.accrual = 0;
                    arrayItem.chargeable = charged
                } else {
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                };//end logic for Regular Hours in Minneapolis
            } else {
                arrayItem.sickAndSafe = sickTime;
                arrayItem.accrual = towardsAccrual;
                arrayItem.chargeable = charged
            }//end logic for work down outside Minneapolis
            ;//end the process for Regular Hours
            if (arrayToCalculate[i].payroll_code === 2) {
                console.log('recording vacation');
                //until a future build where I want to track vacation this doesn't need to do anything other than mark the passage of time with values unchanged
                arrayItem.sickAndSafe = sickTime;
                arrayItem.accrual = towardsAccrual;
                arrayItem.chargeable = charged
            };//end process Vacation Hours
            if (arrayToCalculate[i].payroll_code === 3) {
                console.log('recording sick time');
                sickTime -= arrayToCalculate[i].hours;
                if (probationary){
                    sickTime += arrayToCalculate[i].hours;
                    charged += arrayToCalculate[i].hours;
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                } else if (sickTime < 0) {
                    charged -= sickTime;
                    sickTime = 0;
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                } else {
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                }
            };//end process Sick Hours
            if (arrayToCalculate[i].payroll_code === 4) {
                console.log('recording FMLA time');
                sickTime -= arrayToCalculate[i].hours;
                if (sickTime < 0){
                    sickTime = 0;
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                } else {
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = charged
                }
            };//end process FMLA
            if (arrayToCalculate[i].payroll_code === 5) {
                console.log('recording Unexcused time');
                charged -= arrayToCalculate[i].hours;
                arrayItem.sickAndSafe = sickTime;
                arrayItem.accrual = towardsAccrual;
                arrayItem.chargeable = charged
            };//end process unexcused
            calculatorArray.push(arrayItem);
            console.log('calculatorArray:', calculatorArray);
        }
        return calculatorArray
    }






    render() {

        let calculatorArray = this.payrollCalculator();


        return (
            <div>
                <h3>Employee: {this.props.clicked.username}</h3>
                <h3>Available Sick and Safe Time: </h3>
                <AreaChart
                    width={1000}
                    height={200}
                    data={calculatorArray}
                    syncId="anyId"
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="sickAndSafe" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <hr className="lineBreak"></hr>
                <h3>Time Towards Accrual:</h3>
                <p>One Hour of Sick and Safe Time is earned for every 30 hours worked in Minneapolis. This shows accumulated hours towards your next accrual.</p>
                <AreaChart
                    width={1000}
                    height={200}
                    data={calculatorArray}
                    syncId="anyId"
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="accrual" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
                <hr className="lineBreak"></hr>
            <h3>Unexcused Absences:</h3>
            <p>Unplanned Absences not covered by Sick & Safe or another policy are chargeable and may be subject to disciplinary action.</p>
                <AreaChart
                    width={1000}
                    height={200}
                    data={calculatorArray}
                    syncId="anyId"
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"/>
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="chargeable" stroke="#FF0000" fill="#FF0000" />
                </AreaChart>
                    <hr className="lineBreak"></hr>
                {/* <h3>In VisualizerList</h3>
                <p>{JSON.stringify(this.state)}</p>
                <p>{JSON.stringify(this.props.clicked)}</p> */}

                {/* <button onClick={this.payrollCalculator} >BIG DUMB BUTTON</button> */}
                {/* <VisualizerItem /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clicked: state.clicked,
    userHistory: state.userHistory,
    user: state.user
});

export default connect(mapStateToProps)(VisualizerList);


