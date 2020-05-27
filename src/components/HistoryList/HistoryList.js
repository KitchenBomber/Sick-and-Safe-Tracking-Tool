import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryItem from '../HistoryItem/HistoryItem';

export class HistoryList extends Component {

    render() {
        return (
            <div>
                <h3>HistoryList</h3>
                <p>{JSON.stringify(this.props.clicked)}</p>
               
                <HistoryItem/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    clicked: state.clicked
});

export default connect(mapStateToProps)(HistoryList);
