window.onload = function(){
    const btnBuscar = document.querySelector("#btnBuscar");
    const txtNomeCli = document.querySelector("#nomeCliente");

    btnBuscar.addEventListener('click', function(){
        let datasetCliente = txtNomeCli.dataset.codigo;
        console.log(datasetCliente);
    })
}