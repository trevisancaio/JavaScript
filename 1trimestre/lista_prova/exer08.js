let Lado_1=parseInt(prompt("Digite o valor do lado"))
let Lado_2=parseInt(prompt("Digite o valor do lado"))
let Lado_3=parseInt(prompt("Digite o valor do lado"))

if (Lado_1<=0 || Lado_2<=0 || Lado_3<=0){
  console.log("Não é um triangulo")
}

else if(Lado_1 ==Lado_2==Lado_3){
    print("triangulo é equilatero")
}
    
else if (Lado_1 == Lado_2 != Lado_3){
    print("triangulo é isosceles")
}
else if (Lado_1 == Lado_3 != Lado_2){
    print("triangulo é isosceles")
}
else if (Lado_2 == Lado_3 != Lado_1){
    print("triangulo é isosceles")
}
else if (Lado_1!= Lado_2!= Lado_3){
    print("triangulo é escaleno")
    
    }
