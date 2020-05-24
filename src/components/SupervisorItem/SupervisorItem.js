import React, { Component } from 'react'
import EmployeeList from '../EmployeeList/EmployeeList';

export class SupervisorItem extends Component {


    render() {
        return (
            <div>
                <h3>Hello from Supervisor Item</h3> 
                <EmployeeList/>
            </div>
        )
    }
}

export default SupervisorItem

//this will be the landing page for supervisors.
//It will display their current default settings with an option to change them
//it will also display EmployeeList with the option to add user employees
// CREATE READ UPDATE but not DELETE
