let pesoUsuario = 0;
let estaturaUsuario = 0;

function validarFormularioImc() {
  pesoUsuario = parseFloat(document.getElementById("peso").value);
  console.log(pesoUsuario);
  estaturaUsuario = parseFloat(document.getElementById("estatura").value) / 100;
  console.log(estaturaUsuario);
  let boton = document.getElementById("btnMostrarResultado");

  if (!isNaN(pesoUsuario) && !isNaN(estaturaUsuario)) {
    boton.removeAttribute("disabled");
  } else {
    boton.setAttribute("disabled", "disabled");
  }
}

function calcularImc() {
  let resultado = parseFloat(pesoUsuario / Math.pow(estaturaUsuario, 2));
  resultado = resultado.toFixed(2);
  console.log(`Este es el ${resultado}`);
  if (resultado < 18.5) {
    asignarTextoElemento(
      "totalImc",
      `Tu IMC es de ${resultado} <br/>🟡Te encuentras por debajo del rango`
    );
  } else if (resultado <= 24.9) {
    asignarTextoElemento(
      "totalImc",
      `Tu IMC es de ${resultado} <br/>🟢Te encuentras dentro del rango normal`
    );
  } else if (resultado <= 29.99) {
    asignarTextoElemento(
      "totalImc",
      `Tu IMC es de ${resultado} <br/>🟠Te encuentras en el rango de sobrepeso`
    );
  } else {
    asignarTextoElemento(
      "totalImc",
      `Tu IMC es de ${resultado} <br/>🔴Te encuentras en el rango de obeso`
    );
  }

  console.log(resultado);
}
