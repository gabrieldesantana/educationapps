var i = 0;
var txt = "Bora lá, fazer um melhor uso do seu tempo e estudos?";
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("h-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var ativo = 0;

function ValidaPermissao() {
  let foo = prompt("Senha");
  var slide = document.getElementById("card-slide");
  var button = document.getElementById("button-slide");

  if (foo == "senha") {
    button.style.display = "none";
    slide.style.display = "block";
  } else if (foo != "admin") {
    window.alert("Senha invalida!");
  }
}
