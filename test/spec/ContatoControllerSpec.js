describe("ContatoController", function() {
	it("Deve criar um Contato vazio quando nenhum parametro de rota for passado",function(){
	  expect($scope.contato._id).toBeUndefined();
	});
});