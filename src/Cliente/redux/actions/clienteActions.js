import { save, findAll, findById, deleteAll } from '../../controller/ClienteController';
import { validateEmail } from '../../../../utils/validate';

export function modifyNome(nome) {
    return {
        type: 'MODIFY_NOME',
        payload: {
            nome,
            nomeIsValid: (nome.length < 3) ? false : true 
        },
    }
}

export function modifyEmail(email) {
    return {
        type: 'MODIFY_EMAIL',
        payload: {
            email,
            emailIsValid: validateEmail(email)
        }
    }
}

export function modifyLogin(login) {
    return {
        type: 'MODIFY_LOGIN',
        payload: {
            login,
            loginIsValid: (login.length < 3) ? false : true // fazer função de validação para login único
        },
    }
}

export function modifySenha(senha) {
    return {
        type: 'MODIFY_SENHA',
        payload: {
            senha,
            senhaIsValid: (senha.length < 6) ? false : true
        },
    }
}

export function modifyConfirmaSenha(senha, confirmaSenha) {
    return {
        type: 'MODIFY_CONFIRMA_SENHA',
        payload: {  
            confirmaSenha,
            confirmaSenhaIsValid: (confirmaSenha !== senha) ? false : true
        },
    }
}

export function modifyTelefone(telefone) {
    return {
        type: 'MODIFY_TELEFONE',
        payload: telefone,
    }
}

export function modifyCidade(cidade) {
    return {
        type: 'MODIFY_CIDADE',
        payload: cidade,
    }
}

export function modifyUF(uf) {
    return {
        type: 'MODIFY_UF',
        payload: uf,
    }
}

export function modifyCep(cep) {
    return {
        type: 'MODIFY_CEP',
        payload: cep,
    }
}

export function modifyLogradouro(logradouro) {
    return {
        type: 'MODIFY_LOGRADOURO',
        payload: logradouro,
    }
}

export function modifyNumero(numero) {
    return {
        type: 'MODIFY_NUMERO',
        payload: numero,
    }
}

export function modifyBairro(bairro) {
    return {
        type: 'MODIFY_BAIRRO',
        payload: bairro,
    }
}

export function modifyCpf(cpf) {
    return {
        type: 'MODIFY_CPF',
        payload: cpf,
    }
}

export function clear() {
    return {
        type: 'CLEAR',
    }
}

export function saveCliente(newCliente) {
    save(newCliente);

    let clientes = findAll();

    const teste = {
        nome: 'teste'
    }

    // usar redux thunk
    return {
        type: 'TESTE_CREATE',
        payload: teste,
    }
}

export function updateCliente(cliente) {
    // update cliente
}

export function dropTableClientes() {
    deleteAll();

    // usar redux thunk
    const teste = {
        nome: 'teste'
    }
    return {
        type: 'TESTE_CREATE',
        payload: teste,
    }
}

export function getAllCientes() {
    const clientesList = findAll();

    return {
        type: 'GET_ALL_CLIENTES',
        payload: clientesList,
    }
}

export function getCliente(id) {
    const cliente = findById(id);
}

export function setClienteToUpdate(cliente) {
    return {
        type: 'SET_CLIENTE',
        payload: cliente,
    }
}