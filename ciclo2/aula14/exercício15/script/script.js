let numero = parseInt(prompt("Digite um número de 1 a 10: "));

(function(num){
    if(isNaN(num)){
        console.log("Isso não é um número...");
    }else{
        if((num < 1) || (num > 10)){
            console.log("Valor digitado não está no intervalo de 1 a 10...");
        }else{
            for(let i = 0; i <= 10; i++){
                console.log(`${num} x ${i} = ${num * i}`);
            }
        }
    }
})(numero)