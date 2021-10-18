import {dadosCEP} from './modulo.js';

window.onload = function(){
    const buscar = document.querySelector("#buscar");
    const cep = document.querySelector("#cep");

    buscar.addEventListener('click', function(){
        dadosCEP(cep.value);
    })
}