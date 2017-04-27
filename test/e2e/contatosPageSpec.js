/**
 * Created by IGOR on 26/04/2017.
 */
var ContatosPage = new require('./pages/contatosPage');

describe('Página principal', function () {
    var pagina = new ContatosPage();

    beforeEach(function () {
        pagina.visitar();
    });
    it('Deve estar logado', function () {
        console.log('***********************************************************');
        pagina.obtemUsuarioLogado().then(function (texto) {
            console.log('[SELENIUM-TEST] Verificando se o usuário está logado');
            expect(texto.trim().length).toBeGreaterThan(0);
        });
    });

    it('Deve remover um contato da lista', function () {
        console.log('***********************************************************');
        console.log('[SELENIUM-TEST] Removendo um contato da lista');
        var totalAntes = pagina.obtemTotalItensLista();
        console.log('[SELENIUM-TEST][AÇÃO] Clicando no botçao [REMOVER]');
        pagina.removerPrimeiroItemLista();
        var totalDepois = pagina.obtemTotalItensLista();
        expect(totalDepois).toBeLessThan(totalAntes);

    });

});