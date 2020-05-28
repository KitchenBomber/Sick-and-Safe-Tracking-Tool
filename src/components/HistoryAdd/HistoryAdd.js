import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HistoryAdd extends Component {


    render() {
        return (
            <div>
                <h3>Enter a Single Day</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Start Time</th>
                            <th>Hours</th>
                            <th>Pay Code</th>
                            <th>In Minneapolis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td><input type="date"></input></td>
                        <td><input></input></td>
                        <td>
                            <select>
                            </select>
                        </td>
                        <td><input></input></td>
                    </tbody>
                </table>
                <h3>Enter 5 Days</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Start Time</th>
                            <th>Hours</th>
                            <th>Pay Code</th>
                            <th>In Minneapolis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                        <tr>
                            <td><input type="date"></input></td>
                            <td><input></input></td>
                            <td>
                                <select>
                                </select>
                            </td>
                            <td><input></input></td>
                        </tr>
                    </tbody>
                </table>
                <tr>

                    {/* <p>{JSON.stringify(this.props.clicked)}</p>
                <p>{JSON.stringify(this.props.history)}</p> */}
                </tr>
            </div>

        )
    }
}


const mapStateToProps = state => ({
    clicked: state.clicked,
    history: state.history
});

export default connect(mapStateToProps)(HistoryAdd);