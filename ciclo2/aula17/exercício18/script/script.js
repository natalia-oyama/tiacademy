window.onload = function(){
    const botao = document.querySelector("#botao");
    const listaOrdenada = document.querySelector("#listaOrdenada");
    let veiculos = ["ônibus", "motocicleta", "patinete"];

    veiculos.sort();

    botao.addEventListener('click', function(){
        for(let elemento of veiculos){
            const filho = document.createElement('li');
            listaOrdenada.appendChild(filho).textContent = elemento;
        }
    })
}