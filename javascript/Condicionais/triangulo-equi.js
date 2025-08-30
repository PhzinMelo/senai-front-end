// ../Condicionais/triangulo-equi.js
function ex10() {
  let lado1 = Number(prompt("Digite o primeiro lado:"));
  let lado2 = Number(prompt("Digite o segundo lado:"));
  let lado3 = Number(prompt("Digite o terceiro lado:"));
  let tipo;

  if (lado1 === lado2 && lado2 === lado3) {
    tipo = "Equilátero";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    tipo = "Isósceles";
  } else {
    tipo = "Escaleno";
  }

  alert("O triângulo é " + tipo);
}
