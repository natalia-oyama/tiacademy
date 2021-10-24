const express = require('express');
const cors = require('cors');
const models = require('./models');
const app = express();

app.use(cors());

let cliente = models.Cliente;
let itemPedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get('/', function(req, res){
    res.send('Olá, Mundo!');
});

app.get('/clientes', function(req, res){
    await cliente.create({
        nome: "Natalia",
        endereco: "Rua Lua Nova",
        cidade: "Maringá",
        uf: "PR",
        nascimento: "1999-12-12",
        clienteDesde: "2015-01-15"
    });

    res.send('Cliente adicionado com sucesso.');
});

app.get('/servicos', async(req, res)=>{
    await servico.create({
        nome: "Nodejs",
        descricao: "Desenvolvimento de aplicação back-end.",
        creatAt: new Date(),
        updateAt: new Date()
    });

    res.send('Serviço criado com sucesso.');
});

app.get('/pedidos', function(req, res){
    await pedido.creat({
        dataPedido: "2016-11-10"
    });

    res.send('Pedido registrado com sucesso.');
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res)=>{
    console.log('Servidor ativo: http://localhost:3001');
})