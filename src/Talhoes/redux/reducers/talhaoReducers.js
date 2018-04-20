import { findAll } from '../../controllers/TalhaoController';

const INITIAL_STATE = {
    talhoes: findAll(),
    talhao: {},
    descricao: '',
    tamanho: '',
    fazenda: {},

    isValidDescricao: true,
    isValidTamanho: true,
}

export default function talhaoReducers(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CLEAR':
            state = INITIAL_STATE;
            return state;

        case 'SET_TALHOES':
            return { ...state, talhoes: action.payload };

        case 'SET_TALHAO':
            return { ...state, talhao: action.payload };

        case 'MODIFY_FIELD':
            switch(action.payload.field) {
                case 'descricao':
                    return {
                        ...state,
                        descricao: action.payload.value,
                        descricaoIsValid: (action.payload.value.length < 3) ? false : true
                    }
            }
    }
}