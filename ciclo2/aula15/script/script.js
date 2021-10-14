//typeof
let m = true;

console.log(typeof m);

if(typeof m === 'boolean'){
    console.log("O dado informado é do tipo booleano");
}else{
    console.log("O dado informado não é do tipo booleano");
}

//eventos - DOM
window.onload = function(){
    alert("Olá!");

    const botao = document.getElementById("btn");
    const txtBox = document.querySelector("#txtBox");
    const caixa = document.querySelector("#caixa");

    botao.addEventListener('click', function(){
        caixa.innerHTML += txtBox.value;
    })
}