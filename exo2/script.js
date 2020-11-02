var nombre = prompt("Entrez votre âge")
function testNum(nombre) {

let result;
  if (nombre > 18) {
    result = 'Vous êtes majeur.';
  } else {
    result = 'Vous êtes mineur.';
  }
  return result;
}
  alert(testNum(nombre))