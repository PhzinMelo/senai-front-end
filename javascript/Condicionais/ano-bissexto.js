function ex13() {
  let ano = Number(prompt("Digite um ano:"));
  let mensagem;

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    mensagem = "O ano " + ano + " é bissexto.";
  } else {
    mensagem = "O ano " + ano + " não é bissexto.";
  }

  alert(mensagem);
}
