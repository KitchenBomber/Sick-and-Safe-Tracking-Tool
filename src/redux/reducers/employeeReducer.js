const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return action.payload;
        case 'UNSET_EMPLOYEES':
            return [];
        default:
            return state;
    }
};

// employees will be on the redux state at:
// state.employee
export default employeesReducer;