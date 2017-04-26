/**
 * Created by IGOR on 26/04/2017.
 */
exports.config = {
    specs: ['../test/e2e/**/*.js'],
    onPrepare: function () {
        browser.driver.get('http://localhost:3000');
    }
}