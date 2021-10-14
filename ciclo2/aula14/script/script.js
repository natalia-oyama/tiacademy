//while
let loop = 0;

while(loop < 10){
    console.log(loop);
    loop++;
}

let i = 0;
let cores = ["verde", "vermelho", "azul", "branco"];

while(i < cores.length){
    console.log(cores[i]);
    i++;
}

//do while
let teste = 10;

do{
    console.log(teste);
    teste--;
}while(teste != 0);

let num = 0;

do{
    num = Number(prompt("Digite um número (0 para sair): "));
}while(num != 0);