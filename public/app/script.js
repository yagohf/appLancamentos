var app = angular.module('appLancamentos', ['ngRoute']);

app.config(function($routeProvider){
   $routeProvider
       .when('/', {
            templateUrl: './views/listaLancamentos.html',
            controller: 'lancamentosController'
        }); 
    
    $routeProvider.otherwise({ redirectTo: '/' });
});