import { takeLatest } from 'redux-saga/effects';


function* recordClick(){

}

function* clickedSaga () {
    yield takeLatest('RECORD_CLICK', recordClick);
}

export default clickedSaga;

//this Saga is taking the click event from the EmployeeItem selected and recording it to state so that it's default values can be used in the History Components.


