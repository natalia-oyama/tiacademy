//concat()
let nome = ["Natalia", "Juliana", "Jessica", "Melissa"];
let nome1 = ["Alexandre", "Pedro", "João", "Carlos"];
let doisArray = nome.concat(nome1);

console.log(doisArray);
console.log(`O array nome possui ${nome.length} elementos.`);
console.log(`O array nome1 possui ${nome1.length} elementos.`);
console.log(`O array doisArray possui ${doisArray.length} elementos.`);

//indexOf()
console.log(nome.indexOf("Melissa"));

let buscaNome = "Pedro";

if(nome1.indexOf(buscaNome) != (-1)){
    alert(`Encontrei o nome ${buscaNome} no array! Ele está na posição ${nome1.indexOf(buscaNome)}`);
}else{
    alert("Não encontrei o nome no array...");
}

//join()
console.log(nome);
console.log(nome.join());

//push()
let frutas = [];

frutas.push("maçã");
console.log(frutas);

if(frutas.indexOf(fruta = prompt("Digite uma fruta: ")) == (-1)){
    frutas.push(fruta);
    console.log(frutas);
}else{
    alert("Essa fruta já está na lista...");
}

//pop()
console.log(nome1);
console.log(nome1.pop());
console.log(nome1);

//reverse()
console.log(nome1);
console.log(nome1.reverse());

//shift()
console.log(nome);
console.log(nome.shift());
console.log(nome);

//sort()
let numeros = [2, 10, 4, 27, 109, 37];

console.log(numeros);
console.log(numeros.sort());

console.log(nome);
console.log(nome.sort());

//toString()
console.log(nome);
console.log(nome.toString());

//unShift()

//splice()