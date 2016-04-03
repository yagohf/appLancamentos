var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
var sucesso = false;
var model = undefined;

try {
    //Criar schemas para as tabelas
    var LancamentoSchema = new mongoose.Schema({
        titulo: String,
        data: Date,
        valor: Number
    });
    
    model = mongoose.model('Lancamento', LancamentoSchema);
    console.log('Model Lancamento criada com sucesso !');
}
catch(e){
    console.log('Erro ao criar as models da aplicação:' + e.message);
}

module.exports = model;
