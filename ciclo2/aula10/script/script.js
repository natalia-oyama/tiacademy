//match()
let nome = "Natalia Oyama";

console.log(nome.match("O"));

//search()
console.log(nome.search(/A/i));

//replace()
let str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, facilis explicabo 
dolore voluptates quam voluptate fuga impedit eligendi magni eius dignissimos molestias 
perspiciatis sint vitae eum assumenda ullam commodi eveniet?`;
let strOutra = str.replace(/m/gi, 'n');

console.log(strOutra);

//localeCompare()
let palavra = "cachorro";
let outraPalavra = "cachorro";

console.log(palavra.localeCompare(/Cachorro/gi));

//toString()
let numero = Number("1");

console.log(numero.toString());

//toLowerCase()
console.log(str.toLowerCase());

//toUpperCase()
console.log(str.toUpperCase());

//trim()
let str1 = `     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, facilis explicabo 
dolore voluptates quam voluptate fuga impedit eligendi magni eius dignissimos molestias 
perspiciatis sint vitae eum assumenda ullam commodi eveniet?     `;

console.log(str1.trim());
console.log(str.trim());

//Nan
let num = Number("oi");

console.log(num);
console.log(isNaN(num));

//toFixed()
let valor = 1.69;

console.log(valor.toFixed(1));

//toLocaleString
console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));