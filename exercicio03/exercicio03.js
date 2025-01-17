document.getElementById("verificar").onclick = function () {
    let anoAtual = parseInt(document.getElementById("anoAtual").value);
  
    if (isNaN(anoAtual) || anoAtual < 0) { // verifica  o ano 
      document.getElementById("resultado").textContent = "Por favor, insira um ano válido.";
      return;
    }
  
    // array dos anos de nascimento com exemplos
    let anosDeNascimento = [2005, 1990, 2000, 1995]; 
    let resultado = verificarIdades(anosDeNascimento, anoAtual);
    
    let mensagem = "";
    for (let i = 0; i < resultado.length; i++) {
      mensagem += "Pessoa " + (i + 1) + ": " + resultado[i] + "\n";
    }
    
    document.getElementById("resultado").textContent = mensagem;
  };
  

  function verificarIdades(anos, anoAtual) {
    let idades = [];
    for (let i = 0; i < anos.length; i++) {
      let idade = anoAtual - anos[i];
      if (idade >= 18) {
        idades.push("Maior de idade");
      } else {
        idades.push("Menor de idade");
      }
    }
    return idades;
  }
  