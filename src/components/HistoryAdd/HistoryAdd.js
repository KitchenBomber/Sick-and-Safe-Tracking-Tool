import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HistoryAdd extends Component {

    componentDidMount() {

        let selectedEmployee = this.props.clicked;
        console.log("in HistoryAdd CDM", selectedEmployee);
        this.setState({
            id: selectedEmployee.id,
            user_id: selectedEmployee.id,
            start: "",
            hours: selectedEmployee.dflt_hours,
            payroll_code: "1",
            //start addFive
            mpls: selectedEmployee.dflt_mpls,
            start1: "",
            hours1: selectedEmployee.dflt_hours,
            payroll_code1: "1",
            mpls1: selectedEmployee.dflt_mpls,
            start2: "",
            hours2: selectedEmployee.dflt_hours,
            payroll_code2: "1",
            mpls2: selectedEmployee.dflt_mpls,
            start3: "",
            hours3: selectedEmployee.dflt_hours,
            payroll_code3: "1",
            mpls3: selectedEmployee.dflt_mpls,
            start4: "",
            hours4: selectedEmployee.dflt_hours,
            payroll_code4: "1",
            mpls4: selectedEmployee.dflt_mpls,
            start5: "",
            hours5: selectedEmployee.dflt_hours,
            payroll_code5: "1",
            mpls5: selectedEmployee.dflt_mpls
        })
    }//this sets the initial state in case a value isn't changed before being submitted

    handleChange = (event) => {
        const value = event.target.value;
        console.log('in handleChange', value);
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
        console.log(this.state);
    }

    handleAddOneClick = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'ADD_DAY', payload: this.state });

    }

    handleAddFiveClick = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'ADD_WEEK', payload: this.state });

    }

    render() {
        return (
            <div>
                <h3>Enter a Single Day</h3>
                {/* <p>{JSON.stringify(this.props.clicked)}</p> */}
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Work Hours</th>
                            <th>Pay Code</th>
                            <th>In Minneapolis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button onClick={this.handleAddOneClick}>Submit</button></td>
                            <td><input type="date" name="start" onChange={this.handleChange}></input></td>
                            <td><input type="number" name="hours" defaultValue={this.props.clicked.dflt_hours} onChange={this.handleChange}></input></td>
                            <td>
                                <select onChange={this.handleChange} name="payroll_code">
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td>
                                <select defaultValue={this.props.clicked.dflt_mpls} name="mpls" onChange={this.handleChange}>
                                    <option value="true">In Minneapolis</option>
                                    <option value="false">Outside Minneapolis</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>Enter 5 Days</h3>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Work Hours</th>
                            <th>Pay Code</th>
                            <th>In Minneapolis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* day 1 */}
                        <tr>
                            <td></td>
                            <td><input type="date" name="start1" onChange={this.handleChange}></input></td>
                            <td><input type="number" name="hours1" defaultValue={this.props.clicked.dflt_hours} onChange={this.handleChange}></input></td>
                            <td>
                                <select onChange={this.handleChange} name="payroll_code1">
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td>
                                <select defaultValue={this.props.clicked.dflt_mpls} name="mpls1" onChange={this.handleChange}>
                                    <option value="true">In Minneapolis</option>
                                    <option value="false">Outside Minneapolis</option>
                                </select>
                            </td>
                            
                        </tr>
                        {/* day 2 */}
                        <tr>
                            <td></td>
                            <td><input type="date" name="start2" onChange={this.handleChange}></input></td>
                            <td><input type="number" name="hours2" defaultValue={this.props.clicked.dflt_hours} onChange={this.handleChange}></input></td>
                            <td>
                                <select onChange={this.handleChange} name="payroll_code2">
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td>
                                <select defaultValue={this.props.clicked.dflt_mpls} name="mpls2" onChange={this.handleChange}>
                                    <option value="true">In Minneapolis</option>
                                    <option value="false">Outside Minneapolis</option>
                                </select>
                            </td>
                            
                        </tr>
                        {/* day 3 */}
                        <tr>
                            <td></td>
                            <td><input type="date" name="start3" onChange={this.handleChange}></input></td>
                            <td><input type="number" name="hours3" defaultValue={this.props.clicked.dflt_hours} onChange={this.handleChange}></input></td>
                            <td>
                                <select onChange={this.handleChange} name="payroll_code3">
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td>
                                <select defaultValue={this.props.clicked.dflt_mpls} name="mpls3" onChange={this.handleChange}>
                                    <option value="true">In Minneapolis</option>
                                    <option value="false">Outside Minneapolis</option>
                                </select>
                            </td>
                            
                        </tr>
                        {/* day 4 */}
                        <tr>
                            <td></td>
                            <td><input type="date" name="start4" onChange={this.handleChange}></input></td>
                            <td><input type="number" name="hours4" defaultValue={this.props.clicked.dflt_hours} onChange={this.handleChange}></input></td>
                            <td>
                                <select onChange={this.handleChange} name="payroll_code4">
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td>
                                <select defaultValue={this.props.clicked.dflt_mpls} name="mpls4" onChange={this.handleChange}>
                                    <option value="true">In Minneapolis</option>
                                    <option value="false">Outside Minneapolis</option>
                                </select>
                            </td>                          
                            
                        </tr>
                        {/* day 5 */}
                        <tr>
                            <td><button onClick={this.handleAddFiveClick}>Submit</button></td>
                            <td><input type="date" name="start5" onChange={this.handleChange}></input></td>
                            <td><input type="number" name="hours5" defaultValue={this.props.clicked.dflt_hours} onChange={this.handleChange}></input></td>
                            <td>
                                <select onChange={this.handleChange} name="payroll_code5">
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td>
                                <select defaultValue={this.props.clicked.dflt_mpls} name="mpls5" onChange={this.handleChange}>
                                    <option value="true">In Minneapolis</option>
                                    <option value="false">Outside Minneapolis</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>







        )
    }
}


const mapStateToProps = state => ({
    clicked: state.clicked,
    userHistory: state.userHistory
});

export default connect(mapStateToProps)(HistoryAdd);