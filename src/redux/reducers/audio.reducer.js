const audioReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_AUDIO':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default audioReducer;
  