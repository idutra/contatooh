/**
 * Created by IGOR on 30/03/2017.
 */
angular.module('contatooh')
    .factory('meuInterceptor',
    function ($location,$q) {
        //noinspection UnnecessaryLocalVariableJS
        var interceptor = {
            responseError : function (resposta) {
                if(resposta.status == 401){
                    $location.path('/auth');
                }
                return $q.reject(resposta);
            }
        };

        return interceptor;
    });