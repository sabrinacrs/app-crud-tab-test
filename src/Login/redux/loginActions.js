
export function modifyLogin (login) {
    return {
        type: 'MODIFY_LOGIN',
        payload: login,
    }
}

export function modifySenha (senha) {
    return {
        type: 'MODIFY_SENHA',
        payload: senha,
    }
}

export function login() {
    // realiza validações e chama método da controller para fazer login
    

    // before redux thunk
    const teste = {};
    return {
        type: 'TESTE',
        payload: teste,
    }
}