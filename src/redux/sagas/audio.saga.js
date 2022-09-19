import { put, takeEvery } from "redux-saga/effects";
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

function* fetchMyAudio() {
    // get all audio from the DB
    try {
        const audio = yield axios.get('/api/audio/myAudio');
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

function* editAudio(action) {
    // edit audio in the DB
    try {
        const audio = yield axios.put('/api/audio', action.payload);
        console.log('Edited audio file:', audio.data);
        yield put({ type: 'SET_AUDIO', payload: audio.data });
    } catch {
        console.log('edit audio saga error');
    }

}

function* deleteAudio(action) {
    console.log('delete', action.payload);
    // delete audio from the DB
    try {
        yield axios.delete(`/api/audio/${action.payload}`);
        console.log('Deleting audio file:', action.payload);
        yield put({ type: 'FETCH_AUDIO' });
    } catch {
        console.log('delete audio saga error');
    }

}

function* audioSaga() {
    yield takeEvery('FETCH_AUDIO', fetchAudio),
    yield takeEvery('FETCH_MY_AUDIO', fetchMyAudio),
    yield takeEvery('ADD_AUDIO', addAudio),
    yield takeEvery('EDIT_AUDIO', editAudio),
    yield takeEvery('DELETE_AUDIO', deleteAudio)

}

export default audioSaga