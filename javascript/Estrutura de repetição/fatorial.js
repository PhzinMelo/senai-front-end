let number = Number(prompt("Digite um número para calcular o fatorial"));
let i = 1;
let result = 1;

while (i <= number) {
    alert(`${result} x ${i} = ${result * i}`);
    result *= i;
    i++;
}

alert(`O fatorial de ${number} é ${result}`);
