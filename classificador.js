function receberValores() {
  // Capturando os valores dos campos do formulário
  let vitorias = parseInt(document.getElementById('vitorias').value);
  let derrotas = parseInt(document.getElementById('derrotas').value);
  // Calculando o saldo de Rankeadas
  var saldoVitorias = vitorias - derrotas;

  // Verificando o nível
  var nivel = verificarNivel(saldoVitorias);
  // Exibindo a mensagem
  mensagem(saldoVitorias, nivel);
}

function verificarNivel(saldoVitorias) {
    // Determinando o nível de acordo com o saldo de vitórias
    if (vitorias <= 10) return "Ferro";
    else if (saldoVitorias <= 20) return "Bronze";
    else if (saldoVitorias <= 50) return "Prata";
    else if (saldoVitorias <= 80) return "Ouro";
    else if (saldoVitorias <= 90) return "Diamante";
    else if (saldoVitorias <= 100) return "Lendário";
    else return "Imortal";     
}

function mensagem(saldoVitorias, nivel) {
  var mensagem = `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
  document.getElementById("resultado").innerHTML = mensagem;
}