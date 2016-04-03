var express = require('express');
var router = express.Router();
var Lancamento = require('../dataaccess/models/Lancamento');

module.exports = function(app) {
    //Buscar todos os lançamentos
    app.get('/api/lancamentos', function(req, res){
        console.log('Buscando todos os lançamentos...');
        Lancamento.find(function(err, lancamentos){
            if(err) {
                console.log('Erro ao buscar registros.');    
                res.send(err);
            }
        
            res.json(lancamentos);
        });
    }); 
    
    //Buscar lançamento por id
    app.get('/api/lancamentos/:id', function(req, res){
        console.log('Id pesquisado:' + req.params.id);
        Lancamento.findById(req.params.id, function(err, lancamento){
            if(err) {
                console.log('Erro ao buscar registro: ' + req.params.id);    
                res.send(err);
            }
        
            res.json(lancamento);
        });
    }); 
    
    //Criar novo lançamento
    app.post('/api/lancamentos', function(req, res){
        console.log('Tentando criar um novo registro...');
        console.log(req.body);
        Lancamento.create({
            titulo: req.body.titulo,
            data: req.body.data,
            valor: req.body.valor 
        }, function(err, lancamento){
            if(err) {
                console.log('Erro ao criar registro.');    
                console.log(err);    
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
