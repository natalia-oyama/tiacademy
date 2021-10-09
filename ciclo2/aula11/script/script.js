function Pessoa(nome){
    this.nome = nome;
}

Pessoa.prototype.msg = function(){
    alert("Olá! " + this.nome);
}

let novaPessoa = new Pessoa("Natalia");
let outraPessoa = new Pessoa("Alexandre");

console.log(novaPessoa.nome);

novaPessoa.msg();
outraPessoa.msg();

console.log(novaPessoa);

let Pessoa1 = {
    'nome' : '',
    'idade' : ''
}

Pessoa1.__proto__.msg = function(){
    alert("Olá!!");
}

console.log(Pessoa1);

let p = Pessoa1;

p.msg();
console.log(p);