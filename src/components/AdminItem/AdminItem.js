import React, { Component } from 'react'
import SupervisorList from '../SupervisorList/SupervisorList';

export class AdminItem extends Component {
    render() {
        return (
            <div>
                <h3>Admins are top of the Food Chain</h3>
                <SupervisorList/>
            </div>
        )
    }
}

export default AdminItem
