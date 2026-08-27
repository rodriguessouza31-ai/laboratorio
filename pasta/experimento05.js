let contador = 0;
const botao05 = document.geteElementById("botão05");
const numerocontador = document.getElementById("contador");

botao05.addElementListener("click", function(){
  contador++;  
  numerocontador.textContent = contador;
})
