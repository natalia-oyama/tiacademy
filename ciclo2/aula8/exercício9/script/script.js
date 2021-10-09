(function(){
    let nome = prompt("Digite seu nome: ");
    let altura = parseFloat(prompt("Digite seu altura: "));
    let peso = parseFloat(prompt("Digite seu peso: "));

    let imc = peso / (altura * 2);

    document.write(`Nome: ${nome} <br>`);
    document.write(`Altura: ${altura} <br>`);
    document.write(`Peso: ${peso} <br>`);
    document.write(`IMC: ${imc}`);
})()