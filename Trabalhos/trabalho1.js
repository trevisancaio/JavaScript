function calcular_imc(peso, altura) {
  return peso / (altura ** 2);
}

while (true) {
  try {
    altura = parseFloat(prompt("Digite sua altura em metros: "));

    if (altura <= 0) {
      continue;
    }

    peso = parseFloat(prompt("Digite seu peso em quilogramas: "));

    if (peso <= 0) {
      continue;
    }

    imc = calcular_imc(peso, altura);
    imc_arredondado = round(imc, 2);
    console.log(`Seu IMC é: ${imc_arredondado}`);

    if (imc_arredondado <= 18.4) {
      console.log("Você está abaixo do peso.");
    } else if (imc_arredondado <= 24.9) {
      console.log("Seu peso está normal.");
    } else if (imc_arredondado <= 29.9) {
      console.log("Você está acima do peso.");
    } else if (imc_arredondado <= 34.9) {
      console.log("Você está com obesidade grau I.");
    }

    break; // exit the while loop if no errors occurred

  } catch (error) {
    console.log("Por favor, insira apenas números.");
  }
}
