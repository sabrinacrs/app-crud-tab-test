import { save, findAll, deleteAll } from '../../controllers/FazendaController';

export function getAllFazendas() {
    return {
        type: 'SET_FAZENDAS',
        payload: findAll()
    }
}

export function setFazendas(fazendas) {
    return {
        type: 'SET_FAZENDAS',
        payload: fazendas
    }
}

export function setFazenda(fazenda) {
    return {
        type: 'SET_FAZENDA',
        payload: fazenda
    }
}

export function saveFazenda(newFazenda) {
    save(newFazenda);
    return { type: 'TESTE_CREATE' }
}

export function updateFazenda(fazenda) {
    // update action
}

export function dropTableClientes() {
    deleteAll();
    return { type: 'TESTE_CREATE' }
}

export function clear() {
    return {type: 'CLEAR'}
}

// set fields
export function modifyField(field, value) {
    return {
        type: 'MODIFY_FIELD',
        payload: {
            field,
            value
        }
    }
}