import React, { Component } from 'react'
import EmployeeItem from '../EmployeeItem/EmployeeItem';

export class EmployeeList extends Component {
    render() {
        return (
            <div>
                <h3>Hello from EmployeeList</h3>
                <EmployeeItem/>
            </div>
        )
    }
}

export default EmployeeList

//EmployeeList will be displayed in the SupervisorItem
//This will map the current employees and display some relevant data about them.
//I think I want it to display their default settings and current time balances.
//But, I may decide to have only some of that info available and the rest on the EmployeeItem
//Each EmployeeItem displayed on this list needs to have an option click and drill down to the EmployeeItem

