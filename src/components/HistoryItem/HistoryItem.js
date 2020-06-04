import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

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


    codeTranslator = () => {
        let payrollCode = this.props.historyItem.payroll_code;
        let interpretedCode = "";
        if (payrollCode === 1){
            interpretedCode = "Regular"
        } else if (payrollCode === 2 ){
            interpretedCode = "Vacation"
        } else if (payrollCode === 3 ) {
            interpretedCode = "Sick"
        } else if (payrollCode === 4 ) {
            interpretedCode = "FMLA"
        } else if (payrollCode === 5 ) {
            interpretedCode = "Unexcused/Non-Sick"
        }
        return interpretedCode
}

    render() {

let codeValue = this.codeTranslator();

let viewOrEdit =
    <tr>
        <td>{moment(this.props.historyItem.start).format('MMM Do YYYY')}</td>
        <td>{this.props.historyItem.hours}</td>
        <td>{codeValue}</td>
        <td>{this.props.historyItem.mpls ? 'MPLS' : 'NON-MPLS'}</td>
        <td>
            {this.props.user.access > 4 ? <button className="editButtons" onClick={this.handleEditClick}>Edit</button> : ''}
        </td>
        <td>
            {this.props.user.access > 4 ? <button className="editButtons" onClick={this.handleDelete}>Delete</button> : ''}
        </td>
        {/* <p>{JSON.stringify(this.props.clicked)}</p>
                <p>{JSON.stringify(this.props.userHistory)}</p> */}
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
            <td><button className="editButtons" onClick={this.handleSubmitClick}>Submit</button></td>
            <td><button className="editButtons" onClick={this.handleEditClick}>Cancel</button></td>
        </tr>
    <tr><td><p>no need for entry if date unchanged</p></td></tr>
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
    userHistory: state.userHistory,
    user: state.user
});

export default connect(mapStateToProps)(HistoryItem);
// I need to add a conditional to this page that makes Edit buttons show up on every entry if the person viewing the page is the supervisor of the selected individual. Something like ... if this props.historyItem.supervisor_id === this.props.user.id ... then flip Editable from false to true