function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
