function calcularIMC(peso, altura) {
  return peso / (altura ** 2);
}

while (true) {
  const altura = parseFloat(prompt("Digite sua altura em metros: "));
  if (altura <= 0) {
    break;
  }

  const peso = parseFloat(prompt("Digite seu peso em quilogramas: "));
  if (peso <= 0) {
    break;
  }

  const imc = calcularIMC(peso, altura);
  const imcArredondado = imc.toFixed(2);
  console.log(`Seu IMC é: ${imcArredondado}`);

  if (imcArredondado <= 18.4) {
    console.log("Você está abaixo do peso.");
  } else if (imcArredondado <= 24.9) {
    console.log("Seu peso está normal.");
  } else if (imcArredondado <= 29.9) {
    console.log("Você está acima do peso.");
  } else if (imcArredondado <= 34.9) {
    console.log("Você está com obesidade grau I.");
  } else if (imcArredondado <= 39.9) {
    console.log("Você está com obesidade grau II.");
  } else {
    console.log("Você está com obesidade grau III.");
  }
}
