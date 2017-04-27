/**
 * Created by IGOR on 26/04/2017.
 */
describe('Cadastro de contato',function () {
    beforeEach(function () {
        browser.get('http://localhost:3000/#/contato');
    });

    it('Deve cadastrar um contato',function () {
        console.log('***********************************************************');
        console.log('[SELENIUM-TEST] Iniciando o novo cadastro de usuário');
        var aleatorio = Math.floor((Math.random()* 10000000)+1);
        var nome = 'teste' + aleatorio;
        var email = 'teste@email.com'+aleatorio;
        console.log('[SELENIUM-TEST][AÇÃO]: Informando o nome do contato: ['+nome+']');
        element(by.model('contato.nome')).sendKeys(nome);
        console.log('[SELENIUM-TEST][AÇÃO]: Informando o email do contato: ['+email+']');
        element(by.model('contato.email')).sendKeys(email);
        //element(by.css('option[value="0"]')).click();
        console.log('[SELENIUM-TEST][AÇÃO] Clicando no botão de [SALVAR]');
        element(by.css('.btn-primary')).click();
        console.log('[SELENIUM-TEST] Verificando a expect de operação realizada com sucesso...');
        expect(element(by.binding('mensagem.texto')).getText()).toContain('sucesso');
    });
});