document.getElementById("calcular").onclick = function () {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  let delta = b * b - 4 * a * c;

  if (delta > 0) {
    let raizDelta = raizQuadrada(delta); // calculo delta
    let x1 = (-b + raizDelta) / (2 * a);
    let x2 = (-b - raizDelta) / (2 * a);
    document.getElementById("resultado").textContent =
      "Duas raízes reais: x1 = " + x1 + ", x2 = " + x2;
  } else if (delta === 0) {
    let x = -b / (2 * a);
    document.getElementById("resultado").textContent = "Uma raiz real: x = " + x;
  } else {
    document.getElementById("resultado").textContent = "Não há raízes reais.";
  }
};

function raizQuadrada(numero) {
  return numero ** 0.5;  // calcula a raiz
}
