import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import VisualizerItem from '../VisualizerItem/VisualizerItem';

// const timeData = [
//     { name: 'Page A', sickAndSafe: 40, accrual: 0, chargeable: 4 },
//     { name: 'Page B', sickAndSafe: 40, accrual: 8, chargeable: 4 },
//     { name: 'Page C', sickAndSafe: 40, accrual: 16, chargeable: 4 },
//     { name: 'Page D', sickAndSafe: 40, accrual: 24, chargeable: 4 },
//     { name: 'Page E', sickAndSafe: 41, accrual: 2, chargeable: 200 }
// ]

export class VisualizerList extends PureComponent {
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_HOURS", payload: this.props.clicked });
        console.log('in cDM VizualizerList');
        // this.payrollCalculator([this.props.userHistory]);
        // this.state.sickAndSafe.push(this.props.clicked.previous_year_carryover)
        
    }

    clickHandler = () => {
        console.log('this.props.clicked:', this.props.clicked, ", this props.userHistory:", [this.props.userHistory]);
        
    }
    


    payrollCalculator = () => {
        let arrayToCalculate = [this.props.userHistory]
        //this is the array of objects in
        const calculatorArray = [];
        //this is the array to return
        let sickTime = 0;
        let towardsAccrual = 0;
        let newChargeable = 0;
        //these are reference variables that record what was going on before each entry. I will want the sickTime to preload carryover when i'm at that point.

        console.log('in payrollCalculator', arrayToCalculate);
        for (let i = 0; i < arrayToCalculate.length; i++) {

            let arrayItem = {
                date: "",
                sickAndSafe: 0,
                accrual: 0,
                chargeable: 0
            }
            //this is the object that needs to be filled in and added to the array that will feed into the 
            if (arrayToCalculate.payroll_code = 1) {
                towardsAccrual += arrayToCalculate[i].hours;
                if (towardsAccrual >= 30) {
                    towardsAccrual = towardsAccrual - 30;
                    sickTime += 1;
                    arrayItem.sickAndSafe = sickTime;
                    arrayItem.accrual = towardsAccrual;
                    arrayItem.chargeable = newChargeable
                    //end of Regular Time Calculation
                    console.log('this.state:', this.state);

                    //push the item into the array to be returned 
                }
            }
        }
        return calculatorArray
    }

    
   

    render() {
      
        { this.payrollCalculator()}

        return (
            <div>
                <h3>Available Sick and Safe Time:</h3>
                <AreaChart
                    width={500}
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
                <h3>One Hour of Sick and Safe Time is earned for every 30 hours worked in Minneapolis. This shows accumulated hours towards your next accrual.</h3>
                <AreaChart
                    width={500}
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
                <h3>Unexcused Absences not covered by Sick & Safe are chargeable and may be subject to disciplinary action.</h3>
                    <AreaChart
                    width={500}
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
                    <Area type="monotone" dataKey="chargeable" stroke="#FF0000" fill="#FF0000" />
                </AreaChart>

                <h3>In VisualizerList</h3>
                <p>{JSON.stringify(this.state)}</p>
                <p>{JSON.stringify(this.props.clicked)}</p>

                <button onClick={this.clickHandler} >BIG DUMB BUTTON</button>
                <VisualizerItem/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clicked: state.clicked,
    userHistory: state.userHistory
});

export default connect(mapStateToProps)(VisualizerList);


//The demo code from reChart

// import React, { PureComponent } from 'react';
// import {
//     AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
// } from 'recharts';

// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];

// export default class Example extends PureComponent {
//     static jsfiddleUrl = 'https://jsfiddle.net/alidingling/2vyv694u/';

//     render() {
//         return (
//             <div>
//                 <h4>A demo of synchronized AreaCharts</h4>
//                 <AreaChart
//                     width={500}
//                     height={200}
//                     data={data}
//                     syncId="anyId"
//                     margin={{
//                         top: 10, right: 30, left: 0, bottom: 0,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//                 </AreaChart>
//                 <p>Maybe some other content</p>
//                 <AreaChart
//                     width={500}
//                     height={200}
//                     data={data}
//                     syncId="anyId"
//                     margin={{
//                         top: 10, right: 30, left: 0, bottom: 0,
//                     }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
//                 </AreaChart>
//             </div>
//         );
//     }
// }