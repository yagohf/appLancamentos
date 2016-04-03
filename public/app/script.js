var app = angular.module('appLancamentos', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
       .when('/', {
            templateUrl: './views/listaLancamentos.html',
            controller: 'lancamentosController'
        })
        .when('/lancamentos/cadastrar', {
            templateUrl: './views/cadastrarLancamento.html',
            controller: 'lancamentosController'
        })
        .when('/lancamentos/editar/:id', {
            templateUrl: './views/editarLancamento.html',
            controller: 'lancamentosController'
        }); 
    
    //$routeProvider.otherwise({ redirectTo: '/' });
});