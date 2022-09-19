const audioEdit = (state = {}, action) => {
    if (action.type === 'SET_AUDIO_EDIT') {
        return action.payload;
    }
    // else if (action.type === 'EDIT') {
    //     return {
    //         // spread - give me all of the object 
    //         ...state,
    //         // change this one in particular
    //         [action.payload.property]: action.payload.value
    //     };
    // } else if (action.type === 'EDIT_CLEAR') {
    //     return {};
    // }
    return state;
}

export default audioEdit;