let palavra = prompt("Digite uma palavra: ");

(function(str){
    console.log(`A palavra ${str} possui ${str.length} caracteres.`);
    console.log(`A palavra ${str} ficou ${novaStr = str.toUpperCase()}.`);
    console.log(`A terceira letra da palavra ${str} é "${novaStr[2]}".`);
    console.log(`${novaStr} ficou ${novaStr.replace(novaStr[2], "X")}`);
})(palavra)