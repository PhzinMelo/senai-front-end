let numero = String(prompt("Digite um número inteiro positivo:"));
let i=0
let letras=numero.length
let soma=0
while(i < letras){
   
    soma=soma+ Number(numero[i]);
    alert(soma)
     i++
}

