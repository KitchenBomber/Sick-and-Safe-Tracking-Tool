import React, { Component } from 'react';
import { connect } from 'react-redux';

export class VisualizerList extends Component {
    render() {
        return (
            <div>
                <h3>VisualizerList</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(VisualizerList);
