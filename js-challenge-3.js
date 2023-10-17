// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

//Solicitar saque e saber se foi liberado
function solicitarSaque(saldoTotal, valorSaque) {
  return saldoTotal >= valorSaque;
}

//Realizar saque e imprimir resposta
const saldoLiberado = solicitarSaque(saldoTotal, valorSaque);
if (saldoLiberado) {
  print('Saque realizado com sucesso. Novo saldo: ' + (saldoTotal - valorSaque));
} else {
  print('Saldo insuficiente. Saque nao realizado!');
}
