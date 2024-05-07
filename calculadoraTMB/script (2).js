function calcularTMB(){
  
let sexo=document.getElementById("sexo").value;
let idade=document.getElementById("idade").value;
let peso=document.getElementById("peso").value;
let altura=document.getElementById("altura").value;
let TMB=""
let mensagem="O seu TMB é: " + TMB
  

if (sexo==="M"){
  TMB=88.362 + (13.397*peso)+ (4.799* altura) - (5.677*idade)
  document.getElementById("resultado").innerHTML = mensagem + TMB;
}

else if (sexo==="F"){
  TMB=447.593 + (9.247*peso) + (3.098*altura) - (4.330*idade)
  document.getElementById("resultado").innerHTML = mensagem + TMB;
  

   
  
  }

}
