import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import VisualizerItem from '../VisualizerItem/VisualizerItem';

const timeData = [
    { name: 'Page A', sickAndSafe: 40, accrual: 0, chargeable: 4 },
    { name: 'Page B', sickAndSafe: 40, accrual: 8, chargeable: 4 },
    { name: 'Page C', sickAndSafe: 40, accrual: 16, chargeable: 4 },
    { name: 'Page D', sickAndSafe: 40, accrual: 24, chargeable: 4 },
    { name: 'Page E', sickAndSafe: 41, accrual: 2, chargeable: 200 }
]

export class VisualizerList extends PureComponent {
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_HOURS", payload: this.props.clicked });
        console.log('in cDM VizualizerList');
        // this.payrollCalculator([this.props.history]);
        // this.state.sickAndSafe.push(this.props.clicked.previous_year_carryover)
        
    }

    clickHandler = () => {
        console.log('this.props.clicked:', this.props.clicked, ", this props.history:", [this.props.history], "timeData", timeData);
        
    }
       
 

    // payrollCalculator = () => {
    //     let timeArray = this.props.history
    //     console.log('this.props.clicked:', this.props.clicked, ", this props.history:", [this.props.history], "this.props.state", this.state);
    //     let sickTime = 0;
    //     let towardsAccrual = 0;
    //     let newChargeable = 0;
    //     console.log('in payrollCalculator', this.timeArray);
    //     for (let i=0; i < timeArray.length; i ++){
    //         if (timeArray.payroll_code = 1){
    //             towardsAccrual += timeArray.hours;
    //             if (towardsAccrual >= 30){
    //                 towardsAccrual = towardsAccrual - 30;
    //                 sickTime += 1;
    //                 this.state.sickAndSafe.push(...this.state.sickAndSafe, this.state.sickAndSafe[this.state.sickAndSafe -1] + sickTime);
    //                 this.state.accrual.push(...this.state.accrual, towardsAccrual);
    //                 this.state.chargeable.push(...this.state.chargeable, this.state.chargeable[this.state.chargeable.length - 1] + newChargeable)
    //                 //end of Regular Time Calculation
    //                 console.log('this.state:', this.state);
                    
    //             } 
    //         }
    //     }
    //     return this.state
    // }
   

    render() {

       

        return (
            <div>
                <h3>Available Sick and Safe Time:</h3>
                <AreaChart
                    width={500}
                    height={200}
                    data={timeData}
                    syncId="anyId"
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="sickAndSafe" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                <h3>One Hour of Sick and Safe Time is earned for every 30 hours worked in Minneapolis. This shows accumulated hours towards your next accrual.</h3>
                <AreaChart
                    width={500}
                    height={200}
                    data={timeData}
                    syncId="anyId"
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="accrual" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
                <h3>Unexcused Absences not covered by Sick & Safe are chargeable and may be subject to disciplinary action.</h3>
                    <AreaChart
                    width={500}
                    height={200}
                    data={timeData}
                    syncId="anyId"
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
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
    history: state.history
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