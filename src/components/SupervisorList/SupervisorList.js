import React, { Component } from 'react'
import SupervisorItem from '../SupervisorItem/SupervisorItem';

export class SupervisorList extends Component {
    render() {
        return (
            <div>
                <h3>Hello from SupervisorList</h3>
                <SupervisorItem/>
            </div>
        )
    }
}

export default SupervisorList
