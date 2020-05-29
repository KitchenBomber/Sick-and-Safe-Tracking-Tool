import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HistoryAdd extends Component {


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
                        <td><input type="date"></input></td>
                        <td><input type="number" defaultValue={this.props.clicked.dflt_hours}></input></td>
                        <td>
                                <select onChange={this.handleChange} property="payroll_code">
                                    <option value="1">Regular</option>
                                    <option value="2">Vacation</option>
                                    <option value="3">Sick</option>
                                    <option value="4">FMLA</option>
                                    <option value="5">Unexcused/Non-Sick</option>
                            </select>
                        </td>
                        <td><input type="boolean" defaultValue={this.props.clicked.dflt_mpls}></input></td>
                            <td><button>Submit</button></td>
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
                <p>{JSON.stringify(this.props.history)}</p> */}
                
            </div>

        )
    }
}


const mapStateToProps = state => ({
    clicked: state.clicked,
    history: state.history
});

export default connect(mapStateToProps)(HistoryAdd);