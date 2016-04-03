app.controller('lancamentosController', ['$scope', 'ApiConnect', '$location', '$routeParams', function($scope, ApiConnect, $location, $routeParams) {
    //Models
    $scope.models = [];
    
    //Lista
    $scope.models.listaLancamentos = [];
    $scope.models.listaLancamentos.listaLancamentos = [];
    
    //Cadastro
    $scope.models.cadastrarLancamento = [];
    $scope.models.cadastrarLancamento.lancamento = {};
    
    //Edição
    $scope.models.editarLancamento = [];
    $scope.models.editarLancamento.lancamento = {};
    
    /*
        Métodos - Lista
    */
    $scope.getLancamentos = function() {
        var model = $scope.models.listaLancamentos;
        
        ApiConnect.getLancamentos()
        .success(function(data) {
            model.listaLancamentos = data;
        });
    };
    
    
    /*
        Métodos - Cadastro
    */
    $scope.submitCadastro = function() {
        if(!$scope.frmCadastro.$valid){
            return;
        }  
        
        var model = $scope.models.cadastrarLancamento;
        
        //Objeto de envio ao serviço
        var objCadastro = {};
        objCadastro.titulo = model.lancamento.titulo;
        objCadastro.data = new Date(model.lancamento.data);
        objCadastro.valor = model.lancamento.valor;
        
        //console.log(objCadastro.data.getDate());
        //console.log(objCadastro.data.getMonth() + 1);
        //console.log(objCadastro.data.getYear());
        
        ApiConnect.postLancamento(objCadastro)
        .success(function(data){
            //Voltar para a lista após cadastrar
            $location.path('/');
        });
    };
    
    
    /*
        Métodos - Alteração
    */
    $scope.carregarLancamentoParaEditar = function() {
        //Recuperar o ID do roteamento
        var idEditar = $routeParams.id; 

        var model = $scope.models.editarLancamento;
        
        ApiConnect.getLancamentoById(idEditar)
        .success(function(data) {
            model.lancamento = data;
         });
    };
    
    $scope.submitEdicao = function() {
        if(!$scope.frmEdicao.$valid){
            return;
        }  
        
        var model = $scope.models.editarLancamento;
        
        //Objeto de envio ao serviço
        var objEdicao = {};
        objEdicao._id = model.lancamento._id;
        objEdicao.titulo = model.lancamento.titulo;
        objEdicao.data = new Date(model.lancamento.data);
        objEdicao.valor = model.lancamento.valor;
        
        //console.log(objCadastro.data.getDate());
        //console.log(objCadastro.data.getMonth() + 1);
        //console.log(objCadastro.data.getYear());
        
        ApiConnect.putLancamento(objEdicao)
        .success(function(data){
            //Voltar para a lista após alterar
            $location.path('/');
        });
    };
}]);

//var LancamentoSchema = new mongoose.Schema({
//        titulo: String,
//        data: Date,
//        valor: Number
//    });