import { findAll, deleteAll, save, update, remove } from '../../controllers/TalhaoController';

export function getAllTalhoes() {
    return {
        type: 'SET_TALHOES' ,
        payload: findAll()
    }
}

export function setTalhoes(talhoes) {
    return {
        type: 'SET_TALHOES',
        payload: talhoes
    }
}

export function setTalhao(talhao) {
    return {
        type: 'SET_TALHAO',
        payload: talhao
    }
}

export function saveTalhao(newTalhao) {
    save(newTalhao);
    return { type: 'TESTE_CREATE' }
}

export function updateTalhao(talhao) {
    update(talhao);
    return { type: 'TESTE_UPDATE' }
}

export function clear() {
    return { type: 'CLEAR' }
}

export function modifyField(field, value) {
    return {
        type: 'MODIFY_FIELD',
        payload: {
            field,
            value
        }
    }
}