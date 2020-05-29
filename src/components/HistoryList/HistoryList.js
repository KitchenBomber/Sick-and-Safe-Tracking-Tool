import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryItem from '../HistoryItem/HistoryItem';
import HistoryAdd from '../HistoryAdd/HistoryAdd';

export class HistoryList extends Component {
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_HOURS", payload: this.props.clicked });
    }

    state = {
        add: false
    }

    handleClick = () => {
        this.setState({
            add: !this.state.add
        })
    }//This handleClick flips this screen between View and Add mode

    render() {

        let viewOrAdd = < div >
            <h3>View Employee Time Entries: </h3>
            <button onClick={this.handleClick}>Go To Add Time</button>
            <table>
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>Hours</th>
                        <th>Pay Code</th>
                        <th>In Minneapolis</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.history.map(historyItem =>
                        <HistoryItem key={historyItem.id} historyItem={historyItem} />)}
                </tbody>
            </table>
            <p>{JSON.stringify(this.props.history)}</p>


        </div >


        if (this.state.add) {
            viewOrAdd = (
                <div>
                    <h3>Add Employee Time:</h3>
                    <button onClick={this.handleClick}>Go To View Time</button>
                    <h4>You may add a day or a week but only one at a time</h4>
                    <HistoryAdd />


                    
                </div>

            )
        }
        return (
            <div>
                <h3>Employee: {this.props.clicked.username}</h3>
                {viewOrAdd}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    clicked: state.clicked,
    history: state.history
});

export default connect(mapStateToProps)(HistoryList);
