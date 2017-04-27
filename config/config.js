/**
 * Created by IGOR on 27/04/2017.
 */
module.exports = function() {
    return require('./env/' + (process.env.NODE_ENV || 'development') + '.js');
}