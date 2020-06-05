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
        if(this.props.user.access > 4){
        this.setState({
            add: !this.state.add
        })
    } else {
        alert("you are not authorized to add time");
     }
    }//This handleClick flips this screen between View and Add mode

    render() {

        let viewOrAdd = < div >
            <h3>View Employee Time: </h3>
            <button className="viewAddToggle" onClick={this.handleClick}>Go To Add Time</button>
            <table className="historyTable">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>Hours</th>
                        <th>Pay Code</th>
                        <th>In Minneapolis</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {this.props.userHistory.map(historyItem =>
                        <HistoryItem key={historyItem.id} historyItem={historyItem} />)}
                </tbody>
            </table>
            {/* <p>{JSON.stringify(this.props.userHistory)}</p> */}


        </div >


        if (this.state.add) {
            // need to add conditional here so employee can't do it.
            viewOrAdd = (
                <div>
                    <h3>Enter Employee Time:</h3>
                    <button className="viewAddToggle" onClick={this.handleClick}>Return To View Time</button>
                    <h4>You may enter either a day or a week</h4>
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
    userHistory: state.userHistory,
    user: state.user
});

export default connect(mapStateToProps)(HistoryList);
