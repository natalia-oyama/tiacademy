let Frutas = [
    {fruta: "banana nanica", preço: "R$ 3,69"},
    {fruta: "caqui chocolate", preço: "R$ 11,99"},
    {fruta: "abacate comum", preço: "R$ 10,79"},
    {fruta: "goiaba vermelha", preço: "R$ 7,99"},
    {fruta: "laranja bahia", preço: "R$ 5,55"},
    {fruta: "maçã fuji", preço: "R$ 4,99"}
];

(function(Obj){
    for(let i of Obj){
        for(let j in i){
            console.log(`${j} - ${i[j]}`);
        }
    }
})(Frutas)