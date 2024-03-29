import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export class EmployeeItem extends Component {

handleClick = () => {
    console.log("in handleClick", this.props.employeeItem.id);
    this.props.dispatch({ type: "RECORD_CLICK", payload: this.props.employeeItem });
}



    render() {
        return (
            <tr>
                <td>{this.props.employeeItem.username}</td>
                <td>{moment(this.props.employeeItem.hire_date).format('MMM Do YYYY')}</td>
                <td>{this.props.employeeItem.dflt_hours}</td>
                <td><p>{this.props.employeeItem.dflt_mpls ? 'MPLS' : 'NON-MPLS'}</p></td>
                <td>{this.props.employeeItem.dflt_absence}</td>
                <td><Link to="/history" onClick={this.handleClick}> <button className="historyButton">View/Enter Hours</button></Link></td>
                <td><Link to="/visualizer" onClick={this.handleClick}><button className="graphButton">Visualize</button></Link></td>
            </tr>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(EmployeeItem);

//When viewed by an employee this will display recent time entries, current time balances and a link to the graphs
//When viewed by a supervisor the option to edit or delete time entries should also be available
//supervisors should also have the option to change an employees default settings while an employee should not.
