/**
 * Created by IGOR on 26/04/2017.
 */
var ContatoPage = new require('./pages/contatoPage');

describe('Cadastro de contatos', function() {
    var pagina = new ContatoPage();
    beforeEach(function() {
        pagina.visitar();
    });


    it('Deve cadastrar um contato', function() {
        console.log('***********************************************************');
        console.log('[SELENIUM-TEST] Iniciando o novo cadastro de usuário');
        var aleatorio = Math.floor((Math.random() * 10000000) + 1);

        var nome = 'teste' + aleatorio;
        var email = 'teste@email.com'+aleatorio;
        console.log('[SELENIUM-TEST][AÇÃO]: Informando o nome do contato: ['+nome+']');
        pagina.digitarNome(nome);
        console.log('[SELENIUM-TEST][AÇÃO]: Informando o email do contato: ['+email+']');
        pagina.digitarEmail(email);
        //pagina.selecionarPrimeiraEmergenciaDaLista();
        console.log('[SELENIUM-TEST][AÇÃO] Clicando no botão de [SALVAR]');
        pagina.salvar();
        console.log('[SELENIUM-TEST] Verificando a expect de operação realizada com sucesso...');
        expect(pagina.obterMensagem()).toContain('sucesso');
    });
});