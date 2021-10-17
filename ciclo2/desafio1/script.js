import{criarLista, addProduto, valorProduto, somaPreco} from './modulo.js';

window.onload = function(){
    const frutas = [
        {nome: "Mamão Papaia", preco: 6.35},
        {nome: "Laranja", preco: 5.55},
        {nome: "Manga", preco: 3.99},
        {nome: "Melão", preco: 5.35},
        {nome: "Melancia", preco: 1.89}
    ];

    criarLista(frutas);

    let listaProdutos = document.querySelectorAll("#produtos");
    let totalCompra = document.querySelector("#mostraTotalCompra");
    let l = [];
    let preco = ["0"];
    let total = 0.0;

    totalCompra.setAttribute('value', ``);

    listaProdutos.forEach(function(produtoL){
        produtoL.addEventListener('click', function(elementoL){
            let retorno = addProduto(elementoL, l);

            if(retorno != "nAdd"){
                somaPreco(retorno, total, preco);
            }
        })
    })
}