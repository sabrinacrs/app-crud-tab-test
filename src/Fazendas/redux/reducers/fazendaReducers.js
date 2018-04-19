import { findAll } from '../../controllers/FazendaController';

const INITIAL_STATE = {
    fazendas: findAll(),
}

export default function fazendaReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLEAR': 
            state = INITIAL_STATE;
            return state;

        case 'SET_FAZENDAS':
            return { ...state, fazendas: action.payload }

        default:
            return state;
    }   
}