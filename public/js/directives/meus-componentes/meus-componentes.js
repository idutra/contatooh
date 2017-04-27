/**
 * Created by IGOR on 27/04/2017.
 */
angular.module('meusComponentes', [])
    .directive('meuPainel', function () {
        var directive = {};

        directive.restrict = "EA";

        directive.scope = {
            titulo: '@'
        };

        directive.transclude = true;

        directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

        return directive;
    })
    .directive('meuBotaoAviso', function () {
        var directive = {};

        directive.restrict = "EA";

        directive.scope = {
            nome: '@',
            acao: '&'
        };

        directive.template =
            '<button ng-click="acao()" class="btn btn-warning">' +
            '   {{nome}}' +
            '</button>';

        return directive;

    });