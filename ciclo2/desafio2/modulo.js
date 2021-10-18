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

function resultadoCEP(dados){
    for(let campo in dados){
        switch(campo){
            case 'cep':
                document.querySelector(`#cep`).value = dados[campo];
            break;
            case 'logradouro':
                document.querySelector(`#rua`).value = dados[campo];
            break;
            case 'bairro':
                document.querySelector(`#bairro`).value = dados[campo];
            break;
            case 'localidade':
                document.querySelector(`#cidade`).value = dados[campo];
            break;
            case 'uf':
                document.querySelector(`#estado`).value = dados[campo];
            break;
            default:
            break;
        }
    }
}

export {dadosCEP};