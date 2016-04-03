app.service('ApiConnect', ['$http', function($http){
    var objRest = {};
    var URL_BASE = '/api/';
    
    //Métodos para chamada da API
    objRest.getLancamentos = function(){
        return $http.get(URL_BASE + 'lancamentos');
    }
    
    objRest.postLancamento = function(objLancamento){
        return $http.post(URL_BASE + 'lancamentos', objLancamento);
    };
    
    objRest.getLancamentoById = function(id) {
        return $http.get(URL_BASE + 'lancamentos/' + id);
    };
    
    objRest.putLancamento = function(objLancamento){
        return $http.put(URL_BASE + 'lancamentos/' + objLancamento._id, objLancamento);
    };
    
    return objRest;
}]);