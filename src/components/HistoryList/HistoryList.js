import React, { Component } from 'react'
import { connect } from 'react-redux';

export class HistoryList extends Component {
    render() {
        return (
            <div>
                <h3>HistoryList</h3>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(HistoryList);
