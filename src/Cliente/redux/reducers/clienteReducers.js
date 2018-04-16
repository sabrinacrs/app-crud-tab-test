const INITIAL_STATE = {
    nome: '',
    email: '',
    login: '',
    senha: '',
    telefone: '',
    cidade: '',
    uf: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cpf: '',
    confirmaSenha: '',
    cliente: {},
    clientes: {},
    nomeIsValid: true,
    emailIsValid: true,
    loginIsValid: true,
    senhaIsValid: true,
    confirmaSenhaIsValid: true,
}

export default function clienteReducers(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CLEAR': 
            state = INITIAL_STATE;
            return state;

        case 'MODIFY_NOME':
            return { 
                ...state, 
                nome: action.payload.nome, 
                nomeIsValid: action.payload.nomeIsValid
            };

        case 'MODIFY_EMAIL':
            return { 
                ...state,
                email: action.payload.email, 
                emailIsValid: action.payload.emailIsValid 
            };

        case 'MODIFY_LOGIN':
            return { 
                ...state, 
                login: action.payload.login, 
                loginIsValid: action.payload.loginIsValid 
            };

        case 'MODIFY_SENHA':
            return { 
                ...state, 
                senha: action.payload.senha, 
                senhaIsValid: action.payload.senhaIsValid 
            };

        case 'MODIFY_CONFIRMA_SENHA':
            return { 
                ...state, 
                confirmaSenha: action.payload.confirmaSenha, 
                confirmaSenhaIsValid: action.payload.confirmaSenhaIsValid 
            };
            
        case 'MODIFY_TELEFONE':
            return { ...state, telefone: action.payload };
        case 'MODIFY_CIDADE':
            return { ...state, cidade: action.payload };
        case 'MODIFY_UF':
            return { ...state, uf: action.payload };
        case 'MODIFY_CEP':
            return { ...state, cep: action.payload };
        case 'MODIFY_LOGRADOURO':
            return { ...state, logradouro: action.payload };
        case 'MODIFY_NUMERO':
            return { ...state, numero: action.payload };
        case 'MODIFY_BAIRRO':
            return { ...state, bairro: action.payload };
        case 'MODIFY_CPF':
            return { ...state, cpf: action.payload };
        case 'GET_ALL_CLIENTES':
            return { ...state, clientes: action.payload };
        case 'UPDATE_CLIENTE':
            return { ...state, cliente: action.payload };
        case 'SET_CLIENTE':
            return { ...state, cliente: action.payload };

        default:
            return state;
    }
}