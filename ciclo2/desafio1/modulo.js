function criarLista(frutas){
    let listaProdutos = document.querySelector("#produtos");
    let k = 1;

    for(let i of frutas){
        let li = document.createElement('li');

        li.setAttribute('id', `el${k}`);

        for(let j in i){
            if(j == 'nome'){
                listaProdutos.appendChild(li).textContent = `${i[j]}`;
            }else{
                if(li.getAttribute('id') == `el${k}`){
                    li.setAttribute('value', `${i[j]}`);
                }
            }
        }

        k++;
    }
}

function addProduto(elementoL, l){
    let valor = false;
    let fruta = elementoL.target.textContent;

    for(let i of l){
        if(i == fruta){
            valor = true;
        }
    }

    if(valor == false){
        l.push(fruta);

        let cesta = document.querySelector("#cestaDoCliente");
        let li = document.createElement('li');

        cesta.appendChild(li).textContent = fruta;

        return valorProduto(elementoL);
    }else{
        alert(`Este item (${fruta}) já está na sua cesta!`);

        return "nAdd";
    }
}

function valorProduto(elementoL){
    let valorFruta = elementoL.target.getAttribute('value');

    return valorFruta;
}

function somaPreco(retorno, total, preco){
    const totalCompra = document.querySelector("#mostraTotalCompra");

    preco.push(retorno);

    for(let i of preco){
        total += Number(i);
    }

    totalCompra.setAttribute('value', `${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
}

export{criarLista, addProduto, valorProduto, somaPreco};