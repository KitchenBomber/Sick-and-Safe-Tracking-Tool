const clickedReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECORD_CLICK':
        return action.payload;
        case 'UN_ClICK':
            return [];
            default:
                return state;
    }
};

export default clickedReducer;