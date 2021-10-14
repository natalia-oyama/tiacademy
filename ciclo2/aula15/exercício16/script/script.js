window.onload = function(){
    const entrada = document.querySelector("#entrada");
    const botao = document.querySelector("#botao");
    const texto = document.querySelector("#texto");

    botao.addEventListener('click', function(){
        let valor = entrada.value;

        if(isNaN(valor)){
            texto.innerHTML = "Isso não é um número...";
        }else{
            if((valor < 1) || (valor > 10)){
                texto.innerHTML = "Valor digitado não está no intervalo de 1 a 10...";
            }else{
                for(let i = 0; i <= 10; i++){
                    texto.innerHTML += `${valor} x ${i} = ${valor * i}` + "<br>";
                }
            }
        }
    })
}