exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function() {
        var dvr = browser.driver;

        dvr.get('http://localhost:3000/#/auth').then(function() {
            console.log('***********************************************************');
            console.log('[SELENIUM-TEST] Iniciando o processo de autenticação');
            console.log('[SELENIUM-TEST][AÇÃO] Clicando no link [ENTRAR]');
            dvr.findElement(by.id('entrar')).click();
            console.log('[SELENIUM-TEST][AÇÃO] Informando o e-mail de login');
            dvr.findElement(by.id('Email')).sendKeys('livromeanstack@gmail.com');
            console.log('[SELENIUM-TEST][AÇÃO] Clicando no botão [NEXT]');
            dvr.findElement(by.id('next')).click();
            console.log('[SELENIUM-TEST] Aguardando o carregamento da página');
            dvr.sleep(1000);//Se faz necessário pois o carregamento dos seletores é mais demorado que a ação do selenium.
            console.log('[SELENIUM-TEST][AÇÃO] Informando a senha');
            dvr.findElement(by.id('Passwd')).sendKeys('mean123!');
            console.log('[SELENIUM-TEST][AÇÃO] Clicando no botão [ENTRAR]');
            dvr.findElement(by.id('signIn')).click();
            console.log('[SELENIUM-TEST] Aguardando o carregamento da próxima etapa');
            dvr.sleep(5000);
            console.log('[SELENIUM-TEST][AÇÃO] Clicando no botão [APROVAR]');
            dvr.findElement(by.id('submit_approve_access')).click();
            dvr.sleep(1000);
        });
    }
};