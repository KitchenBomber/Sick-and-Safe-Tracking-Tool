import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HistoryItem extends Component {

    state = {
        editMode: false
        

    }

    componentDidMount(){
        console.log('in historyItem', this.props.historyItem);
        this.setState({
            id: this.props.clicked.id,
            item_id: this.props.historyItem.id,
            editMode: false,
            user_id: this.props.historyItem.user_id,
            start: this.props.historyItem.start,
            hours: this.props.historyItem.hours,
            payroll_code: this.props.historyItem.payroll_code,
            mpls: this.props.historyItem.mpls
        })
    }//this state holds one id for the item to be deleted and one id for the employee that the GET route needs to refresh the hours."
    

    handleDelete = () => {
        console.log('in handleDelete', this.state);
        this.props.dispatch({type: 'DELETE', payload: this.state})
    }

    handleEditClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        console.log('in handleEdit', this.state);
    }//this clicker is also used for Cancel since all it does is flip the state back.

    handleChange = (event) => {
        const value = event.target.value;
        console.log('in handleChange', value);
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
        console.log(this.state);
    }
    
    handleSubmitClick = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        console.log('in handleSubmitClick', this.state);
        this.props.dispatch({ type: 'EDIT_DAY', payload: this.state})
    }

    render() {

let viewOrEdit =
    <tr>
        <td size="12">{this.props.historyItem.start}</td>
        <td>{this.props.historyItem.hours}</td>
        <td>{this.props.historyItem.payroll_code}</td>
        <td>{this.props.historyItem.mpls ? 'MPLS' : 'NON-MPLS'}</td>
        <td>
            {this.props.user.access > 4 ? <button onClick={this.handleEditClick}>Edit</button> : ''}
        </td>
        <td>
            {this.props.user.access > 4 ? <button onClick={this.handleDelete}>Delete</button> : ''}
        </td>
        {/* <p>{JSON.stringify(this.props.clicked)}</p>
                <p>{JSON.stringify(this.props.history)}</p> */}
    </tr>

if (this.state.editMode){
    viewOrEdit = 
    <>
        <tr>
        <td><input type="date" name="start" onChange={this.handleChange} defaultValue={this.props.historyItem.start}></input></td>
        <td><input type="number" name="hours" defaultValue={this.props.historyItem.hours} onChange={this.handleChange}></input></td>
            <td>
            <select onChange={this.handleChange} name="payroll_code" defaultValue={this.props.historyItem.payroll_code}>
                    <option value="1">Regular</option>
                    <option value="2">Vacation</option>
                    <option value="3">Sick</option>
                    <option value="4">FMLA</option>
                    <option value="5">Unexcused/Non-Sick</option>
                </select>
            </td>
            <td>
            <select defaultValue={this.props.historyItem.mpls ? "true" : "false"} name="mpls" onChange={this.handleChange}>
                    <option value="true">In Minneapolis</option>
                    <option value="false">Outside Minneapolis</option>
                </select>
            </td>
            {/* <td><input type="boolean" defaultValue={this.props.clicked.dflt_mpls}></input></td> */}
            <td><button onClick={this.handleSubmitClick}>Submit</button></td>
            <td><button onClick={this.handleEditClick}>Cancel</button></td>
        </tr>
    <tr><td><p>if date is not changing there is no need to make an entry</p></td></tr>
    </>
}

        return (
            <>
            {viewOrEdit}
            </>
            
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