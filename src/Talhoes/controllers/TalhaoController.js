const SCHEMA_NAME = 'Talhao';

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
    let talhao = array[0];

    // retornando um RealmObject ou null, quando não houver nada
    return (result.length === 0) ? null : talhao;
}

export function findMaxId() {
    let lastId = realmDB.objects(SCHEMA_NAME).max('id');
    let nextId = (lastId == null) ? 1 : lastId + 1;

    return nextId;
}

export function save(newTalhao) {
    newTalhao.id = findMaxId();
    realmDB.write(() => {
        const talhao = realmDB.create(SCHEMA_NAME, newTalhao);
    });
}

export function update(talhao) {
    realmDB.write(() => {
        realm.create(SCHEMA_NAME, talhao, true);
    });
}

export function remove(talhao) {
    realmDB.delete(talhao);
}

export function deleteAll() {
    realmDB.write(() => {
        let allFazendasTalhoes = realmDB.objects(SCHEMA_NAME);
        realmDB.delete(allTalhoes);
    });
}