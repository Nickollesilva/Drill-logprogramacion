function numeroUsuario() {
    let numero;
    while (true) {
      const ingreso = prompt("Ingresa un número:");
      numero = parseInt(ingreso);

      if (!isNaN(numero) && Number.isInteger(numero) && numero > 0) {
        console.log("El número ingresado es: " + numero);
        break;
      } else {
        alert("Inválido. El número no es un entero positivo.");
      }
    }
    return numero;
  }
  
  function serieFibonacci(n) {
    const serie = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        serie.push(0);
      } else if (i === 1) {
        serie.push(1);
      } else {
        serie.push(serie[i - 1] + serie[i - 2]);
      }
    }
    return serie;
  }
  function mostrarResultado(serie) {
    const ResultadoDiv = document.getElementById("Resultado");
    ResultadoDiv.textContent = "La serie de Fibonacci es: " + serie.join(", ");
    console.log("La serie de Fibonacci es: " + serie.join(", "));
  }

  const cantidad = numeroUsuario();
  const fibonacci = serieFibonacci(cantidad);
  mostrarResultado(fibonacci);