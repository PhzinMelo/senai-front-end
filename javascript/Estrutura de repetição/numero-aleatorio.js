let randonnum 
randonnum = Math.floor(Math.random() * 100) + 1;
let number = Number(prompt("Tenta adivinhar o meu numero entre 1 e 100"));
while(number !== randonnum)
    if(number > randonnum){
        alert(`maior que o numero`)
        }
    if(number < randonnum){
        alert(`menor que o numero`)
        }
    number = Number(prompt("Tenta novamente:"));


alert("Parabéns! Você acertou o número!");