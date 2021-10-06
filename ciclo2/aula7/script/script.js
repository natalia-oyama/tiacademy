function teste(){
    let nome = "Natalia";
    return nome;
}

console.log(teste());

//Arrow function
let msg = ()=>{
    alert("Estou feliz com as aulas de js.");
}

msg();

//Função auto-executável
(function(produto, preco){
    alert("Produto: " + produto + "  Preço (R$): " + preco);
})("biscoito", 2.35)

//Números inteiros e decimais
let a = prompt("Digite o primeiro valor: ");
let b = prompt("Digite o segundo valor: ");

const soma = (x, y)=>{
    let resultado = parseInt(x) + parseInt(y); //parseFloat() ou Number()
    console.log(resultado);
}

soma(a, b);