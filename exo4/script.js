var nombre = prompt("Entrez votre note")
function testNum(a) {

let result;
  if (a <4) {
    result = 'Nul';
  }
  else if (a <7) {
    result = 'Moyen';
  }
  else if (a <9) {
    result = 'Assez bien';
  }
  else if (a <10) {
    result = 'Bien';
  }
  else {
    result = 'Excellent';
  }
  return result;
}

  alert(testNum(nombre));

  // Demander une note à l'utilisateur :

  //   Si elle est entre 0 et 3 afficher Nul
  //   Si elle est entre 4 et 6 afficher Moyen
  //   Si elle est entre 6 et 8 afficher Assez Bien
  //   Si elle est entre 8 et 9 afficher Bien
  //   Si elle est égale à 10 afficher Excellent