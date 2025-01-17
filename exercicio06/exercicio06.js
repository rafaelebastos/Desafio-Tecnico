document.getElementById("gerar").onclick = function () {
    let numero = parseInt(document.getElementById("numero").value);
    
    if (isNaN(numero) || numero <= 0) {
      document.getElementById("resultado").textContent = "Por favor, insira um número inteiro positivo.";
      return;
    }
  
    // função recursiva fibonacci para obter os n primeiros termos
    let fibonacciSequence = [];
    for (let i = 0; i < numero; i++) {
      fibonacciSequence.push(fibonacci(i));
    }
  
    // n primeiros termos da sequência de Fibonacci
    document.getElementById("resultado").textContent = "Sequência de Fibonacci: " + fibonacciSequence.join(", ");
  };
  
  // calcula o n-ésimo termo da sequência de Fibonacci
  function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  