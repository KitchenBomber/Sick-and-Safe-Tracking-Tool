import { takeLatest } from 'redux-saga/effects';
import { connect } from 'react-redux';

function* clickedRecorder () {
    console.log( 'in clickedRecorder' );
    
}




function* clickedSaga () {
    yield takeLatest('RECORD_CLICK', clickedRecorder);
}

export default clickedSaga;


