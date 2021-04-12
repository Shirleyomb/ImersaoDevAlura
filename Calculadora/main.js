var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
var segundoValor = parseInt(prompt("Digite o segundo valor: "));

var operacao = prompt(
  "Qual o tipo de operação você quer realizar? Divisão(1), Multiplicação(2), Soma(3) ou Subtração(4): "
);
if (operacao == 1) {
  var resultado = primeiroValor / segundoValor;
  document.write(
    "<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 2) {
  var resultado = primeiroValor * segundoValor;
  document.write(
    "<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 3) {
  var resultado = primeiroValor + segundoValor;
  document.write(
    "<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 4) {
  var resultado = primeiroValor - segundoValor;
  document.write(
    "<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>"
  );
}

//Concatenação - Concatenar
//if = se
//else = senão
//else if = senão se
