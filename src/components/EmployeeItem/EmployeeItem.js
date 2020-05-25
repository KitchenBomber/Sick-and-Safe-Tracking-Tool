import React, { Component } from 'react';
import { connect } from 'react-redux';

export class EmployeeItem extends Component {
    render() {
        return (
            <div>
                <h3>Hello from EmployeeItem</h3>
            </div>
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
