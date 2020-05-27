import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisualizerItem from '../VisualizerItem/VisualizerItem';

export class VisualizerList extends Component {
    render() {
        return (
            <div>
                <h3>In VisualizerList</h3>
                <VisualizerItem/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(VisualizerList);

