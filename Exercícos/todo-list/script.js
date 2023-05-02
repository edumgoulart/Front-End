
function verificarEnter(event){
    if (event.keyCode === 13) {
        var valorInput = document.getElementById("meuInput").value;
        var resultado = document.getElementById("resultado");
        resultado.innerHTML += "<p class='texto' onclick='marcarTexto(event)' oncontextmenu='removerTexto(event)'>" + valorInput + "</p>";
        document.getElementById("meuInput").value = "";
    }
}

function removerTexto(event) {
    event.preventDefault();
    event.target.remove(); // remove o elemento clicado
}

function marcarTexto(event) {
    var elementoClicado = event.target; // pega o elemento clicado
  var estaRiscado = elementoClicado.style.textDecoration === 'line-through'; // verifica se o elemento clicado já está riscado

  if (estaRiscado) {
    elementoClicado.style.textDecoration = 'none'; // se o elemento clicado já estiver riscado, remove o riscado
  } else {
    elementoClicado.style.textDecoration = 'line-through'; // se o elemento clicado ainda não estiver riscado, adiciona o riscado
  }
}