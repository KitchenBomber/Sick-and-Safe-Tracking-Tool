import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryItem from '../HistoryItem/HistoryItem';

export class HistoryList extends Component {

    render() {
        return (
            <div>
                <h3>HistoryList</h3>
                <p>{JSON.stringify(this.props)}</p>
                <table>
                    
                </table>
                <HistoryItem/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(HistoryList);
