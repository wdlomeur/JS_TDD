var expect = require('chai').expect;

describe('Main', function() {
    var arr;
    //Roda uma vez, antes do bloco
    /*before(function() {
        // iniciar uma conexão no banco
        // criar um conjunto de dados
    });*/
    
    //Roda uma vez, depois do bloco
    /*after(function() {
        // fechar conexão do banco
        // apagar esse conjunto de dados
    });*/
    
    //Roda todas as vezes antes de cada bloco
    beforeEach(function() {
        arr = [1, 2, 3];
    });

    //Rota todas as vezes depois de cada bloco
    /*afterEach(function() {
         
    });*/

    // testar tipo ou se existe (smoke test)
    it('should be an array', function() {
        expect(arr).to.be.an('array');
    })

    it('should have a size of 4 when push another value to the array', function(){
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should have a size of 2 when pop a value from array', function(){
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });

    it('should return true pop 3 from the array', function () {
        expect(arr.pop() === 3).to.be.true;
    })

    it('should remove the value 3 when use pop in the array', function(){
        arr.pop();
        expect(arr).to.not.include(3)
    });
});
