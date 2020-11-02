var nombre = prompt("Écrivez votre nombre")
function testNum(nombre) {

let result;
  if (nombre%2 == 0) {
    result = 'Le nombre est pair';
  } else {
    result = 'Le nombre est impair';
  }
  return result;
}
  alert(testNum(nombre))