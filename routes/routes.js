var express = require('express');
var router = express.Router();
var Lancamento = require('../dataaccess/models/Lancamento');

module.exports = function(app) {
    //Buscar todos os lançamentos
    app.get('/api/lancamentos', function(req, res){
        Lancamento.find(function(err, lancamentos){
            if(err) {
                console.log('Erro ao buscar registros.');    
                res.send(err);
            }
        
            res.json(lancamentos);
        });
    }); 
    
    //Criar novo lançamento
    app.post('/api/lancamentos', function(req, res){
        console.log('Tentando criar um novo registro...');
        Lancamento.create({
            titulo: req.body.titulo,
            data: req.body.data,
            valor: req.body.valor 
        }, function(err, lancamento){
            if(err) {
                console.log('Erro ao criar registro.');    
                res.send(err);
            }
            
            console.log('Registro criado com sucesso !');
            res.json(lancamento);
        });
    });
    
    //Alterar um lancamento
    app.put('/api/lancamentos/:id', function(req, res) {
        console.log('Tentando alterar um registro existente...'); 
        
        Lancamento.findByIdAndUpdate(req.params.id, req.body, function(err, lancamento){
            if(err) {
                console.log('Erro ao alterar registro.');    
                res.send(err);
            }
            
            console.log('Registro alterado com sucesso !');    
            res.json(lancamento);
        });
    });
    
    //Excluir um registro
    app.delete('/api/lancamentos/:id', function(req, res){
        console.log('Tentando excluir um registro existente...'); 
        Lancamento.findByIdAndRemove(req.params.id, req.body, function(err, lancamento){
            if(err) {
                console.log('Erro ao excluir registro.');    
                res.send(err);
            }
            
            console.log('Registro excluído com sucesso !');    
            res.json(lancamento);
        });
    });
};
