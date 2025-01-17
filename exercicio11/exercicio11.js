let numbers = [];

function iniciar() {
  let quantity = document.getElementById("quantity").value;
  if (quantity < 1) {
    alert("Por favor, insira um número válido.");
    return;
  }
  
  numbers = [];
  let lista = document.getElementById("numbers-list");
  lista.innerHTML = "";

  for (let i = 0; i < quantity; i++) {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = `Número ${i + 1}`;
    input.addEventListener("change", function () {
      numbers[i] = parseInt(input.value);
    });
    li.appendChild(input);
    lista.appendChild(li);
  }

  let button = document.createElement("button");
  button.textContent = "Verificar Ordem Crescente";
  button.onclick = verificarOrdem;
  document.body.appendChild(button);
}

function verificarOrdem() {
  let count = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      count++;
    }
  }

  document.getElementById("resultado").textContent = `Existem ${count} números em ordem crescente.`;
}
