import React, { Component } from 'react'
import { connect } from 'react-redux';

export class VisualizerItem extends Component {
    render() {
        return (
            <div>
                {/* <h3>VisualizerItem</h3>
                <p>{JSON.stringify(this.props.clicked)}</p> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clicked: state.clicked
});

export default connect(mapStateToProps)(VisualizerItem);