exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function() {
        var dvr = browser.driver;

        dvr.get('http://localhost:3000/#/auth').then(function() {
            dvr.findElement(by.id('entrar')).click();
            dvr.findElement(by.id('Email')).sendKeys('email-google');
            dvr.findElement(by.id('next')).click();
            browser.sleep(1000);//Se faz necessário pois o carregamento dos seletores é mais demorado que a ação do selenium.
            dvr.findElement(by.id('Passwd')).sendKeys('senha-google');
            dvr.findElement(by.id('signIn')).click();
        });
    }
};