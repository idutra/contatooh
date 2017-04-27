/**
 * Created by IGOR on 26/04/2017.
 */
describe('Página principal', function () {
    beforeEach(function () {
        browser.get('http://localhost:3000/#/contatos');
    });
    it('Deve estar logado', function () {
        console.log('***********************************************************');
        element(by.id('usuario-logado')).getText().then(function (texto) {
            console.log('[SELENIUM-TEST] Verificando se o usuário está logado');
            expect(texto.trim().length).toBeGreaterThan(0);
        });
    });

    it('Deve remover um contato da lista', function () {
        console.log('***********************************************************');
        console.log('[SELENIUM-TEST] Removendo um contato da lista');
        var totalAntes = element.all(by.repeater('contato in contatos')).count();
        console.log('[SELENIUM-TEST][AÇÃO] Clicando no botçao [REMOVER]');
        element(by.repeater('contato in contatos').row(0)).element(by.css('.btn')).click();
        var totalDepois = element.all(by.repeater('contato in contatos')).count();
        expect(totalDepois).toBeLessThan(totalAntes);

    });

});