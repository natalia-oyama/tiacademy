window.onload = function(){
    let produtos = [
        {descricao: 'bolacha', preco: 2.20},
        {descricao: 'marmelada', preco: 3.40},
        {descricao: 'sabonete', preco: 5.70}
    ];
    const listaProdutos = document.querySelector("#listaDeProdutos");
    const Total = document.querySelector("#total");

    (()=>{
        let total = 0;

        for(let pro of produtos){
            const filhoLi = document.createElement('li');

            for(let listaP in pro){
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);

                    total += pro[listaP];
                }else{
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }
            }
        }

        Total.value = total;
    })(produtos)
}