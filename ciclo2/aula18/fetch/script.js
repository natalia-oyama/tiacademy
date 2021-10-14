window.onload = function(){
    function resultadoCEP(dados){
        for(let campo in dados){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value = dados[campo];
            }
        }
    }

    let dadosCEP = async function(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`;

        try{
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();

            resultadoCEP(dadosJson);
        }catch(error){
            alert(error);
        }
    }

    // dadosCEP('87023060');

    const buscar = document.querySelector("#buscar");
    const cep = document.querySelector("#numeroCEP");

    buscar.addEventListener('click', function(){
        dadosCEP(cep.value);
    })
}