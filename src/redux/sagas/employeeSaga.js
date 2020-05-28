import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_EMPLOYEES" actions
function* fetchEmployees() {
    console.log('in fetchEmployees');
    
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/employees', config);
        yield put({ type: 'SET_EMPLOYEES', payload: response.data });
    } catch (error) {
        console.log('Employees get request failed', error);
    }
}

function* employeesSaga() {
    yield takeLatest('FETCH_EMPLOYEES', fetchEmployees);
}

export default employeesSaga;