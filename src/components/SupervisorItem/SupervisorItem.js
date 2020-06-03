import React, { Component } from 'react'
import EmployeeList from '../EmployeeList/EmployeeList';
import {connect} from 'react-redux';

export class SupervisorItem extends Component {


    render() {
        return (
            <div>
                {/* <h3>Hello from Supervisor Item</h3>  */}
                <EmployeeList/>
            </div>
        )
    }
}


//this will be the landing page for supervisors.
//It will display their current default settings with an option to change them
//it will also display EmployeeList with the option to add user employees
// CREATE READ UPDATE but not DELETE
const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(SupervisorItem);
