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
            mpls: selectedEmployee.dflt_mpls
        })
    }//this sets the initial state, may not work when i scale it up to 5 entries at a time.

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
    this.props.dispatch({type: 'ADD_DAY', payload: this.state});

}

    render() {
        return (
            <div>
                <h3>Enter a Single Day</h3>
                <p>{JSON.stringify(this.props.clicked)}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Start Time</th>
                            <th>Work Hours</th>
                            <th>Pay Code</th>
                            <th>In Minneapolis</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                            {/* <td><input type="boolean" defaultValue={this.props.clicked.dflt_mpls}></input></td> */}
                            <td><button onClick={this.handleAddOneClick}>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
                <h3>Enter 5 Days</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Start Time</th>
                            <th>Work Hours</th>
                            <th>Pay Code</th>
                            <th>In Minneapolis</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td><input></input></td>

                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                                </select>
                            </td>
                            <td><input></input></td>
                            <td><button>Submit</button></td>
                        </tr>
                    </tbody>
                </table>


                {/* <p>{JSON.stringify(this.props.clicked)}</p>
                <p>{JSON.stringify(this.props.userHistory)}</p> */}

            </div>

        )
    }
}


const mapStateToProps = state => ({
    clicked: state.clicked,
    userHistory: state.userHistory
});

export default connect(mapStateToProps)(HistoryAdd);