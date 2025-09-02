function demoFind() {
    let produtos = [
        {
            id: "1",
            nome: "Teclado",
            preco: 100
        },
        {
            id: "2",
            nome: "Mouse",
            preco: 50
        },
        {
            id: "3",
            nome: "Monitor",
            preco: 700
        }
    ];

    let produtoCaro = produtos.find(produto => produto.preco === 700);
    console.log(produtoCaro); // Mostra no console
    alert(`Produto encontrado: ${produtoCaro.nome} - R$ ${produtoCaro.preco}`);
}

const demoMap = () => { 
    const numeros = [1, 2, 3, 4, 5];
    let numerosDobrados = numeros.map(numero => numero * 2);
    console.log(numerosDobrados); 
    alert(`Números dobrados: ${numerosDobrados.join(', ')}`);
};