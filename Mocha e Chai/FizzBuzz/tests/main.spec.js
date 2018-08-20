/*
Desafio FizzBuzz

escreva uma lib que receba umnúmero e:

Se o número for divisíivel por 3, no lugar do número escreva ´Fizz`
Se o número for divisíivel por 5, no lugar do número escreva ´Buzz`
Se o número for divisíivel por 3 e 5, no lugar do número escreva ´FizzBuzz`
Se não for múltiplo de nada, retornar o número
*/
import { expect } from 'chai';
import FizzBuzz from '..\\src\\main';

describe('Main', () => {
  it('should return ´Fizz´when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return ´Fizz´when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return ´Fizz´when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return then number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
    expect(FizzBuzz(7)).to.be.not.a('string');
  });

  it('should return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });

});
