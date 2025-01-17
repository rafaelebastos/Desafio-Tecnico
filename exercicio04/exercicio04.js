document.getElementById("converter").onclick = function () {
    let valorReal = parseFloat(document.getElementById("valorReal").value);
    
    if (isNaN(valorReal) || valorReal <= 0) {
      document.getElementById("resultado").textContent = "Por favor, insira um valor válido em reais.";
      return;
    }
  
    let taxaEuro = 6.10;
    let taxaDolar = 5.70;
  
    let valorEuro = valorReal / taxaEuro;
    let valorDolar = valorReal / taxaDolar;
  
    document.getElementById("resultado").textContent = 
      `R$${valorReal.toFixed(2)} equivale a €${valorEuro.toFixed(2)} e $${valorDolar.toFixed(2)}.`;
  };
  