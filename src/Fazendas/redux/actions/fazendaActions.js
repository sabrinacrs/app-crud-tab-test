import { save, update, findAll, deleteAll } from '../../controllers/FazendaController';

export function setUpdate(isUpdate) {
    return {
        type: 'SET_UPDATE',
        payload: isUpdate
    }
}

export function getAllFazendas() {
    return {
        type: 'SET_FAZENDAS',
        payload: findAll()
    }
}

export function setAllFazendas() {
    return {
        type: 'SET_ALL_FAZENDAS',
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
    update(fazenda);
    return { type: 'TESTE_UPDATE' }
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

export function modifyTextSearch(text) {
    return {
        type: 'MODIFY_TEXT_SEARCH',
        payload: text
    }
}

export function filterSearch (allFazendas, text) {
    const newData = allFazendas.filter((item) => {
        const itemData = item.nome.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
    });

    return {
        type: 'SEARCH',
        payload: {
            text,
            newData
        }
    }

    // this.props.setFazendas(newData);
    // this.props.modifyTextSearch(text);
}