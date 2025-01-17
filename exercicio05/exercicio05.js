document.getElementById("verificar").onclick = function () {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
  

    if (isNaN(numero)) {
      resultado.textContent = "Por favor, insira um número válido.";
      return;
    }
  
    if (numero % 3 === 0 && numero % 5 === 0) {
      resultado.textContent = "fizzbuzz";
    } else if (numero % 3 === 0) {
      resultado.textContent = "fizz";
    } else if (numero % 5 === 0) {
      resultado.textContent = "buzz";
    } else {
      resultado.textContent = "";
    }
  };
  