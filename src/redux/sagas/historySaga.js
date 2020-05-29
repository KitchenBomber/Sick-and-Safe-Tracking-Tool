import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
// import { connect } from 'react-redux';

// worker Saga: will be fired on "FETCH_HOURS" actions
function* fetchHours(action) {
    console.log('in fetchHours', action.payload);

    try {
        
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get(`/api/history/${action.payload.id}`, config);
        yield put({ type: 'SET_HOURS', payload: response.data });
    } catch (error) {
        console.log('History get request failed', error);
    }
}

function* sendDay(action){

    console.log("in sendDay", action.payload );
    try {
        yield axios.post('/api/history', action.payload);
        yield put ({ type: 'FETCH_HOURS', payload: action.payload});
    }catch(error){
        console.log(error);
        
    }
}

function* historySaga() {
    yield takeLatest('FETCH_HOURS', fetchHours);
    yield takeEvery('ADD_DAY', sendDay)
}

export default historySaga;
// const mapStateToProps = state => ({
//     clicked: state.user,
// });

// // this allows us to use <App /> in index.js
// export default connect(mapStateToProps)(historySaga);