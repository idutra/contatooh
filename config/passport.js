/**
 * Created by IGOR on 30/03/2017.
 */
var passport = require('passport');
/*Autenticação pelo Git-Hub*/
//var GitHubStrategy = require('passport-github').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');
var config = require('./config')();

module.exports = function () {
    var googleCallback = 'http://'+config.domain+':'+config.port+'/auth/google/callback';
    var Usuario = mongoose.model('Usuario');

    passport.use(new GoogleStrategy({
            clientID: config.clientID,
            clientSecret: config.clientSecret,
            callbackURL: googleCallback,
            passReqToCallback   : true
        },
        function(request, accessToken, refreshToken, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function () {

                Usuario.findOrCreate(
                    { "login" : profile.email},
                    { "nome" : profile.displayName},
                    function(err, user) {
                        if(err) {
                            return done(err);
                        }
                        return done(null, user);
                    }
                );
            });
        }
    ));

    /* Autenticação via GitHub
     passport.use(new GitHubStrategy({
     clientID: 'c0381860407ca83165a5',
     clientSecret: '0ad55fc8845ef5fd929fe913f14967ae138727d7',
     callbackURL: 'http://localhost:3000/auth/github/callback'
     }, function(accessToken, refreshToken, profile, done) {

     Usuario.findOrCreate(
     { "login" : profile.username},
     { "nome" : profile.username},
     function(erro, usuario) {
     if(erro) {
     return done(erro);
     }
     return done(null, usuario);
     }
     );
     }));*/

    /*
     Chamado apenas UMA vez e recebe o usuario do nosso
     banco disponibilizado pelo callback da estratégia de
     autenticação. Realizará a serialização apenas no
     ObjectId do usuário na sessão.
     */
    /*
     passport.serializeUser(function(usuario, done) {
     done(null, usuario._id);
     });*/
    //Recebe o ObjectId do usuário armazenado na sessão
    //Chamado a CADA requisição
    /*
     passport.deserializeUser(function(id, done) {
     Usuario.findById(id).exec()
     .then(function(usuario) {
     done(null, usuario);
     });
     });*/

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        Usuario.findById(obj).exec().then(function (usuario) {
            done(null,usuario);
        })
    });
};