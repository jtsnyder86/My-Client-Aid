import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchClients() {
    // get all clients from the DB
    try {
        const client = yield axios.get('/api/user/clients');
        console.log('get all:', client.data);
        yield put({ type: 'SET_CLIENTS', payload: client.data });
    } catch {
        console.log('fetch client saga error');
    }

}

// function* addAudio(action) {
//     // add audio to the DB
//     try {
//         const audio = yield axios.post('/api/audio', action.payload);
//         console.log('Added audio file:', audio.data);
//         yield put({ type: 'SET_AUDIO', payload: audio.data });
//     } catch {
//         console.log('add saga error');
//     }

// }

function* editClient(action) {
    // edit client user in the DB
    try {
        yield axios.put('/api/user/clients', action.payload);
        console.log('Edited CLIENT file:', action.payload);
        yield put({ type: 'SET_CLIENTS', payload: action.payload });
    } catch {
        console.log('edit CLIENT saga error');
    }

}

function* deleteClient(action) {
    console.log('delete', action.payload);
    // delete client from the DB
    try {
        yield axios.delete(`/api/user/${action.payload}`);
        console.log('Deleting CLIENT:', action.payload);
        yield put({ type: 'FETCH_CLIENTS' });
    } catch {
        console.log('delete CLIENT saga error');
    }

}

function* clientSaga() {
    yield takeEvery('FETCH_CLIENTS', fetchClients),
    // yield takeEvery('ADD_CLIENT', addClients),
    yield takeEvery('EDIT_CLIENT', editClient),
    yield takeEvery('DELETE_CLIENT', deleteClient)
}

export default clientSaga