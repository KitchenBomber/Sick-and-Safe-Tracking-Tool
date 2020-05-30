import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import VisualizerItem from '../VisualizerItem/VisualizerItem';

export class VisualizerList extends PureComponent {
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_HOURS", payload: this.props.clicked });
        console.log('in cDM VizualizerList')
        
    }

    clickHandler = () => {
        console.log('this.props.clicked:', this.props.clicked, ", this props.history:", [this.props.history]);
        
    }


    render() {
        return (
            <div>
                <h3>In VisualizerList</h3>
                <p>{JSON.stringify(this.props.clicked)}</p>
                <button onClick={this.clickHandler}>BIG DUMB BUTTON</button>
                <VisualizerItem/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clicked: state.clicked,
    history: state.history
});

export default connect(mapStateToProps)(VisualizerList);

