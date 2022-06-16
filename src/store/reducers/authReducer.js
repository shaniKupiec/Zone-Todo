const INITIAL_STATE = {
    loggedInUser: {
    }
}

export function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_LOGGED_IN_USER':
            return {
                ...action.loggedInUser
            };
        default:
            return state;
    }
}