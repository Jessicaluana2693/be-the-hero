const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response){ //listagem de todos os dados de uma tabela
        const ongs =   await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    async create(request, response) {
        //meu request
        const { name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        // minha response
        return response.json({ id });
    }
};