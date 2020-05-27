import React, { Component } from 'react'
import { connect } from 'react-redux';

export class VisualizerItem extends Component {
    render() {
        return (
            <div>
                <h3>VisualizerItem</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(VisualizerItem);