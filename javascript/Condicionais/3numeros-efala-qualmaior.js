const num1 =Number(prompt("fala um numero"))
const num2 =Number(prompt("fala outro numero"))
const num3 =Number(prompt("fala o ultimo numero"))

if (num1 === num2 && num2 === num3) {
    alert("Todos os números são iguais.");
} else if (num1 >= num2 && num1 >= num3) {
    alert(`O número maior é o ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    alert(`O número maior é o ${num2}`);
} else {
    alert(`O número maior é o ${num3}`);
}