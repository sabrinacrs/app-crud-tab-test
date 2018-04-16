import Realm from 'realm';

const ClienteSchema = {
    name: 'Cliente',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        nome: 'string',
        email: 'string',
        login: 'string',
        senha: 'string',
        telefone: 'string',
        cidade: 'string',
        uf: 'string',
        cep: 'string',
        logradouro: 'string',
        numero: 'int',
        bairro: 'string',
        cpf: 'string',
        dataDesativacao: 'date',
        status: 'string',
    }
}

const CultivarSchema = {
    name: 'Cultivar',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        nome: 'string',
        alturaPlanta: 'string',
        fertilidade: 'string',
        regulador: 'string',
        rendimentoFibraMinimo: 'double',
        rendimentoFibraMaximo: 'double',
        pesoCapulhoMinimo: 'double',        
        pesoCapulhoMaximo: 'double',        
        comprimentoFibraMinimo: 'double',
        comprimentoFibraMaximo: 'double',
        micronaireMinimo: 'double',
        micronaireMaximo: 'double',
        resistenciaMinimo: 'double',
        resistenciaMaximo: 'double',
        pesoSementesMinimo: 'double',
        pesoSementesMaximo: 'double',
        status: 'string',
        dataDesativacao: 'date',
        cicId: 'int'
    }
}

const CultivarEpocaSemeaduraSchema = { 
    name: 'CultivarEpocaSemeadura',
    properties: {
        cultId: 'int',
        epId: 'int',
        plantasHa: 'double',
    }
}

const CultivarDoencaSchema = {
    name: 'CultivarDoenca',
    properties: {
        id: {type: 'int', indexed: true},
        cultId: 'int',
        doeId: 'int',
        tolId: 'int'
    }
}

const FazendaSchema = {
    name: 'Fazenda',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        nome: 'string',
        hectares: 'double',
        dataDesativacao: 'date',
        cidade: 'string',
        uf: 'string',
        bairro: 'string',
        email: 'string',
        enderecoWeb: 'string',
        telefone: 'string',
        cliId: 'int',
    }
}

const SemeaduraSchema = {
    name: 'Semeadura',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        quilosSementes: 'double',
        germinacao: 'double',
        metrosLineares: 'double',
        talhaoId: 'int',
        cultivarId: 'int',
        epocaSemeaduraId: 'int',
        data: 'date',
    }
}

const TalhaoSchema = {
    name: 'Talhao',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        descricao: 'string',
        tamanho: 'double',
        dataDesativacao: 'date',
        fazId: 'int'
    }
}

const CicloSchema = {
    name: 'Ciclo',
    primaryKey: 'id',
    properties: {
        id: {type: 'int', indexed: true},
        descricao: 'string',
        status: 'string',
        dataDesativacao: 'date',
    }
}

const realmDB = new Realm(
    {
        schema: [
            ClienteSchema,
            CultivarSchema,
            CultivarEpocaSemeaduraSchema,
            CultivarDoencaSchema,
            FazendaSchema,
            SemeaduraSchema,
            TalhaoSchema,
            CicloSchema
        ]
    });

export default realmDB;