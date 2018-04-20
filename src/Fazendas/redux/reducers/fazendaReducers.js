import { findAll } from '../../controllers/FazendaController';
import { validateEmail } from '../../../../utils/validate';

const INITIAL_STATE = {
    allFazendas: findAll(),
    fazendas: findAll(),
    fazenda: {},
    nome: '',
    hectares: '',
    cidade: '',
    uf: '',
    bairro: '',
    email: '',
    enderecoWeb: '',
    telefone: '',
    cliente: {},
    textSearch: '',
    isUpdate: false,

    nomeIsValid: true,
    hectaresIsValid: true,
    ufIsValid: true,
    emailIsValid: true,
    telefoneIsValid: true,
};

export default function fazendaReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLEAR':
            state = INITIAL_STATE;
            return state;

        case 'SEARCH':
            return { 
                ...state, 
                textSearch: action.payload.text, 
                fazendas: action.payload.newData 
            };

        case 'SET_UPDATE':
            return { ...state, isUpdate: action.payload };
        
        case 'SET_ALL_FAZENDAS':
            return { ...state, allFazendas: action.payload };

        case 'SET_FAZENDAS':
            return { ...state, fazendas: action.payload };

        case 'SET_FAZENDA':
            return { ...state, fazenda: action.payload };

        case 'MODIFY_TEXT_SEARCH':
            return { ...state, textSearch: action.payload };
        
        case 'MODIFY_FIELD':
            switch (action.payload.field) {
                case 'nome':
                    return {
                        ...state,
                        nome: action.payload.value,
                        nomeIsValid: (action.payload.value.length < 3) ? false : true
                    }

                case 'hectares':
                    return {
                        ...state,
                        hectares: action.payload.value,
                        // hectaresIsValid: // validar hectares
                    }

                case 'cidade':
                    return {
                        ...state,
                        cidade: action.payload.value,
                    }

                case 'uf':
                    return {
                        ...state,
                        uf: action.payload.value,
                        ufIsValid: (action.payload.value != "" && action.payload.value.length < 2) ? false : true
                    }

                case 'bairro':
                    return {
                        ...state,
                        bairro: action.payload.value,
                    }

                case 'email':
                    return {
                        ...state,
                        email: action.payload.value,
                        emailIsValid: (action.payload.value != "" && validateEmail(action.payload.value))
                    }

                case 'enderecoWeb':
                    return {
                        ...state,
                        enderecoWeb: action.payload.value
                    }

                case 'telefone':
                    return {
                        ...state,
                        telefone: action.payload.value,
                        telefoneIsValid: (action.payload.value != "" && action.payload.value < 14) ? false : true
                    }
            }

        default:
            return state;
    }
}
