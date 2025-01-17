document.getElementById("calcular").onclick = function () {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
  
    // verifica se numero e valido
    if (isNaN(numero) || numero < 0) {
      resultado.textContent = "Por favor, insira um número inteiro positivo.";
      return;
    }
  
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
  
    resultado.textContent = "Fatorial de " + numero + " é " + fatorial;
  
    // faz a pergunta
    setTimeout(function () {
      let continuar = prompt("Você quer calcular o fatorial de outro número? (S para sim, N para não)");
  
      if (continuar.toLowerCase() === 's') {
        document.getElementById("numero").value = '';  // limpa entrada
        resultado.textContent = '';  // limpa resultado
      } else {
        resultado.textContent += " Obrigado por usar!";
      }
    }, 500);  // pergunta aparece apos meio segundo
  };
  