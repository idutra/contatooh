var MongoCLient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('58b8a503dac6e151038df7be');

MongoCLient.connect('mongodb://127.0.0.1:27017/contatooh',
    function(erro,db){
        if(erro) throw err;
        db.collection('contatos').findOne({_id: _idProcurado},
            function(erro,contato){
                if(erro) throw err;
                console.log(contato);
            }
        );
    }
);