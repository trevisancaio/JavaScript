let numero = parseInt(prompt("Digite um numero"))

if (numero>=100){
  console.log("o numero é maior que 100")
}

else{
  let dezena = parseInt (numero/10)
  let unidade = numero%10
  let soma = dezena+unidade
  console.log(soma)
}
