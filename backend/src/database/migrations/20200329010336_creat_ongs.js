exports.up = function(knex) { // criar tabelas
    return knex.schema.createTable('ongs', function (table){ // criando tabela com as informações
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) { // deletar tabelas
    return knex.schema.dropTable('ongs');
};
