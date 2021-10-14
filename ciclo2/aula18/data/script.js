let meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

let diaSemana = [
    'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
    'Quinta-feira', 'Sexta-feira', 'Sábado'
];

let data = new Date();

console.log(data.getDate());
console.log(meses[data.getMonth()]);
console.log(`Hoje é ${diaSemana[data.getDay()]}, dia ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}.`);

let dataFormatada = data.toLocaleString('pt-BR', {year: 'numeric', month: '2-digit', day: '2-digit'});

console.log(dataFormatada);