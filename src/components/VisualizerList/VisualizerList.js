import React, { Component } from 'react';
import { connect } from 'react-redux';
import VisualizerItem from '../VisualizerItem/VisualizerItem';

export class VisualizerList extends Component {
    render() {
        return (
            <div>
                <h3>In VisualizerList</h3>
                <p>{JSON.stringify(this.props.clicked)}</p>
                <VisualizerItem/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clicked: state.clicked
});

export default connect(mapStateToProps)(VisualizerList);

