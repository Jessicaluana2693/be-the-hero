exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) { // criando tabela com as informações
        table.increments(); // chave primaria de autoincremento
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); //numero float
       
        // relacionamento com a tabela de ong - cada incidente esta conectado com alguma ong ao menos
        table.string('ong_id').notNullable();

        // chave estrangeira - toda vez quem um indcidente for criado deve estar ligao ao id de uma ong existente
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
