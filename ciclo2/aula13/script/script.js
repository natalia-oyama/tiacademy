//for in
let Pessoas = {
    nome: "Natalia Oyama",
    idade: "20",
    altura: "1,59"
}

for(let propriedade in Pessoas){
    console.log(Pessoas[propriedade]);
}

//for of
let frutas = ["maçã", "banana", "uva", "melancia", "laranja"];

for(nomeFrutas of frutas){
    console.log(nomeFrutas);
}