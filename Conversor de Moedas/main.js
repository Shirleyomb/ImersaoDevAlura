function calcular() {
  event.preventDefault();
  var valor1 = parseFloat(document.getElementById("valor1").value);
  var cotacao = parseFloat(document.getElementById("cotacao").value);
  document.getElementById("resultado").value = (valor1 * cotacao).toFixed(2);
}