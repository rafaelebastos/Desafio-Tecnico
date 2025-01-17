document.getElementById("verificar").onclick = function () {
    let frase = document.getElementById("frase").value;
    
  
    let fraseLimpa = frase.replace(/\s/g, '').toLowerCase();
  
    let fraseReversa = fraseLimpa.split('').reverse().join('');
    
    if (fraseLimpa === fraseReversa) {
      document.getElementById("resultado").textContent = "A frase é um palíndromo!";
    } else {
      document.getElementById("resultado").textContent = "A frase não é um palíndromo.";
    }
  };
  