const SCHEMA_NAME = 'Fazenda';

import realmDB from '../../schemas/schemas';

export function findAll() {
    let query = realmDB.objects(SCHEMA_NAME);
    let array = Array.from(query);

    return array;
}

export function findById(id) {
    let query = "id = " + id;
    let result = realmDB.objects(SCHEMA_NAME).filtered(query);
    let array = Array.from(result);
    let fazenda = array[0];

    // retornando um RealmObject ou null, quando não houver nada
    return (result.length === 0) ? null : fazenda;
}

export function findMaxId() {
    let lastId = realmDB.objects(SCHEMA_NAME).max('id');
    let nextId = (lastId == null) ? 1 : lastId + 1;

    return nextId;
}

export function save(newFazenda) {
    newFazenda.id = findMaxId();
    realmDB.write(() => {
        const fazenda = realmDB.create(SCHEMA_NAME, newFazenda);
    });
}

export function update(fazenda) {
    realmDB.write(() => {
        realm.create(SCHEMA_NAME, fazenda, true);
    });
}

export function remove(fazenda) {
    realmDB.delete(fazenda);
}

export function deleteAll() {
    realmDB.write(() => {
        let allFazendas = realmDB.objects(SCHEMA_NAME);
        realmDB.delete(allFazendas);
    });
}