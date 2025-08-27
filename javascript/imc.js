const altura =Number(prompt("Digite sua altura"))
const peso =Number(prompt("Digite seu peso"))
let imc

imc=peso/(altura*altura)
if (imc<=18.5){ 
    alert(`Abaixo do peso`)
    alert(`Seu imc e ${imc}`)
}
else if (imc>18.5 && imc<=24.9){ 
    alert(`Peso normal`)
    alert(`Seu imc e ${imc}`)

}
else if (imc>25 && imc <=29.9){  
    alert(`Sobrepeso`)
    alert(`Seu imc e ${imc}`)
}
else if (imc >=30){  
    alert(`Obeso`)
    alert(`Seu imc e ${imc}`) 
}
