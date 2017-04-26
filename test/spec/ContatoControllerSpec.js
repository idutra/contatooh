describe("ContatoController", function() {
	
	beforeEach(function(){
		module('contatooh');
	});
	
	it("Deve criar um Contato vazio quando nenhum parametro de rota for passado",inject(function(){
		$controller('ContatoController');
		expect($scope.contato._id).toBeUndefined();
	}));
});