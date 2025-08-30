function ex6(){
const operation =Number(prompt("escolha a operação 1=adição,2=subtração,3=multiplicação,4=divisão"));
let number1 = Number(prompt("Primeiro número"));
let number2 = Number(prompt("Segundo número"));
let number3
if(operation===1){
   number3=number1+number2 
    alert(number3)
}
else if(operation===2){    
   number3= number1-number2
    alert(number3)
}
else if(operation===3){    
    number3=number1*number2
    alert(number3)
}
else if (operation===4){   
    number3= number1/number2
    alert(number3)
}
else{   
    alert(`Opção invalida`)
}
}