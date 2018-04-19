import { findAll } from '../../controllers/FazendaController';
import { validateEmail } from '../../../../utils/validate';

const INITIAL_STATE = {
    fazendas: findAll(),
    nome: '',
    hectares: '',
    cidade: '',
    uf: '',
    bairro: '',
    email: '',
    enderecoWeb: '',
    telefone: '',
    cliente: {},

    nomeIsValid: true,
    hectaresIsValid: true,
    ufIsValid: true,
    emailIsValid: true,
    telefoneIsValid: true,
}

export default function fazendaReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CLEAR': 
            state = INITIAL_STATE;
            return state;

        case 'SET_FAZENDAS':
            return { ...state, fazendas: action.payload }

        case 'MODIFY_FIELD':
            switch (action.payload.field) {
                case 'nome ':
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

                case 'cliente': 
                    return {
                        ...state,
                        cliente: action.payload.value
                    }
            }

        default:
            return state;
    }   
}