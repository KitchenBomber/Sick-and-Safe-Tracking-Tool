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
                <h3>Hello from EmployeeList</h3>
                <p>Current User: {JSON.stringify(this.props.user)}</p>
                {/* <p>User Employees: {JSON.stringify(this.props.employees)}</p> */}
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Hire Date</td>
                            <td>Shift Hours</td>
                            <td>Location</td>
                            <td>Absence Limit</td>
                            <td>Add/Edit</td>
                            <td>Visualize</td>
                        </tr>
                    </thead>
                    {/* will probably add conditional here to show a supervisor's own information */}
                    <tbody>
                        <tr>
                            <td>{this.props.user.username}</td>
                            <td>{this.props.user.hire_date}</td>
                            <td>{this.props.user.dflt_hours}</td>
                            <td><p>{this.props.user.dflt_mpls ? 'MPLS' : 'NON-MPLS'}</p></td>
                            <td>{this.props.user.dflt_absence}</td>
                        </tr>
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

