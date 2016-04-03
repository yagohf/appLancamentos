var mongoose = require('mongoose');
var configDb = require('../config/database');
var sucesso = false;

try {
    mongoose.connect(configDb.url);
    sucesso = true;
    console.log('Conexão efetuada com sucesso !');
    console.log('Conectado ao MongoDB em:' + configDb.url);
}
catch(e){
    console.log('Não foi possível conectar ao MongoDB:' + e.message);
}

module.exports = { sucesso: sucesso };