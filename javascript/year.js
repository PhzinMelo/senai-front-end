const ano = Number(prompt("Fala um ano ai vou te dizer se e bissexto"))
let bissexto
let resultado

if(ano%4 ===0 && ano %100 !==0){   
    alert(`o ano ${ano} e bissexto`)
}
else if(ano %400 ===0)
{   
    alert(`O ano é bissexto`)
}
else{   
    alert(`O ano não é bissexto`)
}