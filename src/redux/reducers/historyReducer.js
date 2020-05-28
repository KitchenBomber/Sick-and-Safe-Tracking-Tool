const historyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOURS':
            console.log('in history Reducer', action.payload);
            
            return action.payload;
        case 'UNSET_HOURS':
            return [];
        default:
            return state;
    }
};

// hours will be on the redux state at:
// state.history
export default historyReducer;