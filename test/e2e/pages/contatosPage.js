/**
 * Created by IGOR on 27/04/2017.
 */
var contatosPage = function () {
    this.visitar = function () {
        browser.get('http://localhost:3000/#/contatos');
    };
    this.obtemUsuarioLogado = function (nome) {
        return element(by.id('usuario-logado')).getText();
    };
    this.obtemTotalItensLista = function () {
        return element.all(by.repeater('contato in contatos')).count();
    };

    this.removerPrimeiroItemLista = function () {
        element(by.repeater('contato in contatos').row(0)).element(by.css('.btn')).click();
    }
}
module.exports = contatosPage;