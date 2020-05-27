import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class EmployeeItem extends Component {




    render() {
        return (
            <tr>
                <td>{this.props.employeeItem.username}</td>
                <td>{this.props.employeeItem.hire_date}</td>
                <td>{this.props.employeeItem.dflt_hours}</td>
                <td><p>{this.props.employeeItem.dflt_mpls ? 'MPLS' : 'NON-MPLS'}</p></td>
                <td>{this.props.employeeItem.dflt_absence}</td>
                <td><Link to="/history"><button>History</button></Link></td>
                <td><Link to="/visualizer"><button>Visualize</button></Link></td>
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
