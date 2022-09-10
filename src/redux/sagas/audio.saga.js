import { put,takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchAudio() {
    // get all audio from the DB
    try {
        const audio = yield axios.get('/api/audio');
        console.log('get all:', audio.data);
        yield put({ type: 'SET_AUDIO', payload: audio.data });
    } catch {
        console.log('fetch saga error');
    }

}

function* addAudio(action) {
    // add audio to the DB
    try {
        const audio = yield axios.post('/api/audio', action.payload);
        console.log('Added audio file:', audio.data);
        yield put({ type: 'SET_AUDIO', payload: audio.data });
    } catch {
        console.log('add saga error');
    }

}

function* audioSaga() {
    yield takeEvery('FETCH_AUDIO', fetchAudio),
    yield takeEvery('ADD_AUDIO', addAudio)
}

export default audioSaga