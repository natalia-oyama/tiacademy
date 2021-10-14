let palavra = prompt("Digite uma palavra: ");

(function(str){
    for(let i = (str.length - 1); i >= 0; i--){
        console.log(str[i]);
    }
})(palavra)