function encontrarElementoUnico() {
    let input = document.getElementById("numbers").value;
    let numeros = input.split(",").map(num => parseInt(num.trim()));
  
    let unico = 0;
    for (let i = 0; i < numeros.length; i++) {
      unico ^= numeros[i]; // Usando XOR para encontrar o elemento único
    }
  
    document.getElementById("resultado").textContent = `O elemento único é: ${unico}`;
  }
  