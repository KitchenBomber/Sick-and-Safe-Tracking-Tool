import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HistoryItem extends Component {



    render() {
        return (
            <tr>
                <td>{this.props.historyItem.start}</td>
                <td>{this.props.historyItem.hours}</td>
                <td>{this.props.historyItem.payroll_code}</td>
                <td>{this.props.historyItem.mpls ? 'MPLS' : 'NON-MPLS'}</td>
                <td>
                    {this.props.user.access > 4 ? <button>Edit</button> : ''}
                </td>
                <td>
                    {this.props.user.access > 4 ? <button>Delete</button> : ''}
                </td>
                {/* <p>{JSON.stringify(this.props.clicked)}</p>
                <p>{JSON.stringify(this.props.history)}</p> */}
            </tr>
        )
    }
}


const mapStateToProps = state => ({
    clicked: state.clicked,
    history: state.history,
    user: state.user
});

export default connect(mapStateToProps)(HistoryItem);
// I need to add a conditional to this page that makes Edit buttons show up on every entry if the person viewing the page is the supervisor of the selected individual. Something like ... if this props.historyItem.supervisor_id === this.props.user.id ... then flip Editable from false to true