/**
 * Primeiro desafio LeetCode 30 Days of Javascript 
 * Desafio proposto: Independente do argumento passado a função deverá sempre retornar 'Hello World '
 * @return {Function}
 */

var createHelloWorld = function() {
  return function() {
      return 'Hello World'
  }
};

const f = createHelloWorld();
console.log(f({}, null, 42)); // "Hello World"
