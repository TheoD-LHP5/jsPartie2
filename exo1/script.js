var a = prompt("Entrez votre chiffre")
function testNum(a) {

let result;
  if (a > 21) {
    result = 'supérieur à 21';
  } else {
    result = 'inférieur à 21';
  }
  return result;
}
  alert(testNum(a))