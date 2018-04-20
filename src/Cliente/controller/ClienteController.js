const SCHEMA_NAME = 'Cliente';

// importar Realm, com schema e tals
import realmDB from '../../schemas/schemas';

export function save(newCliente) {
    // pegar current id pq realm não tem autoincrement
    newCliente.id = findMaxId();
    // newCliente.id = Math.floor(Math.random() * (100 - 1)) + 1;

    realmDB.write(() => {
        const cliente = realmDB.create(SCHEMA_NAME, newCliente);

        console.log(cliente);
    });
    
    console.log('ON SAVE - MAX ID');
    console.log(findMaxId());
}

export function update(user) {
    
}

export function remove(user) {

}

export function findAll() {
    let query = realmDB.objects(SCHEMA_NAME);
    let arrayClientes = Array.from(query);

    return arrayClientes;
}

export function findById(id) {
    let query = "id = " + id;
    let result = realmDB.objects(SCHEMA_NAME).filtered(query);
    let array = Array.from(result);
    let cliente = array[0];

    // teste
    console.log('GET BY ID');
    console.log(cliente);

    // retornando um RealmObject ou null, quando não houver nada
    return (result.length === 0) ? null : cliente;
}

export function findMaxId() {
    let lastId = realmDB.objects(SCHEMA_NAME).max('id');
    let nextId = (lastId == null) ? 1 : lastId + 1;

    return nextId;
}

export function deleteAll() {
    console.log('ON DELETE ALL');

    realmDB.write(() => {
        let allClientes = realmDB.objects(SCHEMA_NAME);
        realmDB.delete(allClientes); // delete all clientes
    });
}