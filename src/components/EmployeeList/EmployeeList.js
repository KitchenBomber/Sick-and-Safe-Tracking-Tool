import React, { Component } from 'react'
import EmployeeItem from '../EmployeeItem/EmployeeItem';
import { connect } from 'react-redux';

export class EmployeeList extends Component {

    componentDidMount(){
        this.props.dispatch( {type: 'FETCH_EMPLOYEES', action: this.props} )

}


    render() {
        return (
            <div>
                <h3>Employee(s) default settings:</h3>
                <h3>Current User: {this.props.user.username} </h3>
                {/* <p>User Employees: {JSON.stringify(this.props.employees)}</p> */}
                <table className="defaultsTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hire Date</th>
                            <th>Shift Hours</th>
                            <th>Location</th>
                            <th>Absence Limit</th>
                            <th>Add/Edit</th>
                            <th>Visualize</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map(employeeItem =>
                            <EmployeeItem key={employeeItem.id} employeeItem={employeeItem}/>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    employees: state.employees,
});

export default connect(mapStateToProps)(EmployeeList);

//EmployeeList will be displayed in the SupervisorItem
//This will map the current employees and display some relevant data about them.
//I think I want it to display their default settings and current time balances.
//But, I may decide to have only some of that info available and the rest on the EmployeeItem
//Each EmployeeItem displayed on this list needs to have an option click and drill down to the EmployeeItem

