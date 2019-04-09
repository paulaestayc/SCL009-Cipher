/*aquí va el objeto que yo quiero evaluar(operator) y qué quiero evaluar (objeto)

describe("operator", () => {
  it("..aqui va lo que deberia hacer mi objeto, ejemplo sumar " , () => {
    assert.equal(typeof operator, "object")
  });
  describe("operator.add", () => {
    it ("deberia ser una function", () => {
      assert.equal(typeof window.operators.add, 'function');
    it ("deberia retornar unError si falta un parametro", () => {
      assert.equal(typeof window.operators.add (2), "Error");  
  });
    it ("deberia retornar suma de dos numeros ", () => {
      assert.equal(window.operators.add(2,2), 4);
  });

    describe("operator.multiply", () => {
    it ("deberia ser una function", () => {
      assert.equal(typeof window.operators.multiply, 'function');       **nombreDelObjeto.nombreDelMetodo.AccedoAEseMétodo
  });
    it ("deberia retornar multiplicación de dos números ", () => {
      assert.equal(window.operators.multiply(2,4), 8);
  });
  
  });
});

**en archivo src=cipher.js

window.operators = {
  add: (firstNumber, secondNumber) => {
    return= firstNumber + firstNumber;
  if(firstNumber ===undefined || secondNumber ===undefined){
  return "Error"
  }

  multiply: (firstNumber, secondNumber) => {
    return= firstNumber * secondNumber;

los test corren desde terminan con npm test*/




describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33' , () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
  });

});
});
});

