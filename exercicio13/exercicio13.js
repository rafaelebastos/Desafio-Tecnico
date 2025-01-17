let time = [];

function menu() {
  let menuOptions = `
    <p>1 - Adicionar jogador</p>
    <p>2 - Buscar por posição</p>
    <p>3 - Listar time</p>
    <p>4 - Calcular pontuação média</p>
    <p>5 - Sair</p>
    <input type="number" id="opcao" placeholder="Escolha uma opção" />
    <button onclick="executarAcao()">Escolher</button>
  `;
  
  document.getElementById("menu").innerHTML = menuOptions;
}

function executarAcao() {
  let opcao = document.getElementById("opcao").value;

  switch (opcao) {
    case "1":
      adicionarJogador();
      break;
    case "2":
      buscarPorPosicao();
      break;
    case "3":
      listarTime();
      break;
    case "4":
      calcularPontuacaoMedia();
      break;
    case "5":
      alert("Programa encerrado.");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}

function adicionarJogador() {
  let nome = prompt("Nome do jogador:");
  let idade = prompt("Idade do jogador:");
  let posicao = prompt("Posição do jogador:");
  let pontuacao = prompt("Pontuação do jogador:");

  let jogador = {
    nome: nome,
    idade: parseInt(idade),
    posicao: posicao,
    pontuacao: parseInt(pontuacao),
  };

  time.push(jogador);
  alert(`Jogador ${nome} adicionado com sucesso!`);
  menu();
}

function buscarPorPosicao() {
  let posicaoBusca = prompt("Digite a posição para buscar:");

  let jogadoresEncontrados = time.filter(jogador => jogador.posicao.toLowerCase() === posicaoBusca.toLowerCase());

  if (jogadoresEncontrados.length > 0) {
    jogadoresEncontrados.forEach(jogador => {
      alert(`Nome: ${jogador.nome}, Idade: ${jogador.idade}, Pontuação: ${jogador.pontuacao}`);
    });
  } else {
    alert("Nenhum jogador encontrado para essa posição.");
  }
  menu();
}

function listarTime() {
  if (time.length > 0) {
    time.forEach((jogador, index) => {
      alert(`Jogador ${index + 1}: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`);
    });
  } else {
    alert("Nenhum jogador cadastrado.");
  }
  menu();
}

function calcularPontuacaoMedia() {
  if (time.length > 0) {
    let somaPontuacao = time.reduce((soma, jogador) => soma + jogador.pontuacao, 0);
    let media = somaPontuacao / time.length;
    alert(`A pontuação média do time é: ${media}`);
  } else {
    alert("Nenhum jogador cadastrado.");
  }
  menu();
}
