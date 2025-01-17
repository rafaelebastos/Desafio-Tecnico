let fila = [];

function exibirFila() {
  let listaClientes = document.getElementById("clientes");
  listaClientes.innerHTML = "";
  
  for (let i = 0; i < fila.length; i++) {
    let cliente = document.createElement("li");
    cliente.textContent = `${i + 1}º ${fila[i]}`;
    listaClientes.appendChild(cliente);
  }
}

function addCliente() {
  let nome = prompt("Digite o nome do novo cliente:");
  if (nome) {
    fila.push(nome);
    exibirFila();
  }
}

function atenderCliente() {
  if (fila.length > 0) {
    let clienteAtendido = fila.shift();
    alert(`Atendendo cliente: ${clienteAtendido}`);
    exibirFila();
  } else {
    alert("Não há clientes na fila.");
  }
}

function sair() {
  if (confirm("Tem certeza que deseja sair?")) {
    alert("Programa encerrado.");
    window.close();
  }
}
