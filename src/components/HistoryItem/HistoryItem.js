import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HistoryItem extends Component {

    render() {
        return (
            <div>
               <h3>HistoryItem</h3> 
                <p>{JSON.stringify(this.props.clicked)}</p>
                <p>{JSON.stringify(this.props.history)}</p>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    clicked: state.clicked,
    history: state.history
});

export default connect(mapStateToProps)(HistoryItem);
