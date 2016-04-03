app.controller('lancamentosController', ['$scope', function($scope){
    $scope.bemvindo = 'Ola, seja bem-vindo !';
    
    $scope.getLancamentos = function() {
        alert('ok');
    };
}]);

//var LancamentoSchema = new mongoose.Schema({
//        titulo: String,
//        data: Date,
//        valor: Number
//    });