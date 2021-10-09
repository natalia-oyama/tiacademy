//Template string
let str = `Template string!`;
let str1 = `Outra string. ${str}`;

console.log(str1);

//Concatenação (+)
let str2 = "Concatenação";
let str3 = str2 + " utilizando o sinal de +.";

console.log(str3);

//Array: coleção de dados
const frutas = ["uva", "banana", "laranja", "maçã"]; //tamanho do array = 4
let frutaFav = `Eu gosto de ${frutas[1]}`;

console.log(frutaFav);
console.log(frutas[0]); //uva
console.log(frutas[1]); //banana
console.log(frutas[2]); //laranja
console.log(frutas[3]); //maçã

const pessoa = ["Natalia", 20, "solteira", "softbol", 1.59];
const pessoa1 = `Meu nome é ${pessoa[0]}, tenho ${pessoa[1]} anos, sou ${pessoa[2]}, gosto de jogar ${pessoa[3]} e tenho ${pessoa[4]} m de altura.`;

console.log(pessoa1);

(function(p){
    document.write(p);
})(pessoa1)

console.log(pessoa.length); //tamanho do array
console.log("Natalia".length); //tamanho da string