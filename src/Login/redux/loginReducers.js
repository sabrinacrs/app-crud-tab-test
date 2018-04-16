const INITIAL_STATE = {
    login: '',
    senha: '',
}

export default function loginReducers (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'MODIFY_LOGIN':
            return { ...state, login: action.payload };

        case 'MODIFY_SENHA':
            return { ...state, SENHA: action.payload };
    
        default:
            return state;
    }
}