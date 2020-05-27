import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HistoryItem extends Component {
    render() {
        return (
            <div>
               <h3>HistoryItem</h3> 
            </div>
        )
    }
}


const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(HistoryItem);
