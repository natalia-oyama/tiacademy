let nome = ["Natalia", "Mel", "Ayumi", "Juliana", "Stela"];
let outroNome = prompt("Digite um nome: ");
let numero = parseInt(prompt("Digite um número (0~5): "));

if((numero >= 0) && (numero <= 5)){
    (function(lista, novoNome, indice){
        console.log(`Quantidade de elementos no array: ${lista.length}.`);

        lista.push(novoNome);

        console.log(`Índice escolhido (${indice}) refere-se ao elemento "${lista[indice]}".`);
        console.log(`Quantidade atual de elementos no array: ${lista.length}.`);
    })(nome, outroNome, numero)
}else{
    alert("Número inválido...");
}