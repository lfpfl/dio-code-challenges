//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
while (true) {

  const valor = parseFloat(gets());
  
  if (valor > 0) {
    let saldoAtual = 0;
    let novoSaldo = saldoAtual + valor;
    print('Deposito realizado com sucesso!');
    print('Saldo atual: R$ ' + novoSaldo.toFixed(2));
    break; //Imprime mensagem de sucesso com novo saldo e encerra o programa.
  } else if (valor < 0) {
    print('Valor invalido! Digite um valor maior que zero.'); //Imprime mensagem de valor inválido e reinicia o programa.
    break;
  } else {
    print('Encerrando o programa...');
    break; //Encerra o programa e imprime mensagem final.
  }
}
