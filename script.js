var i = 0;
var txt = "Bora lá, fazer um melhor uso do seu tempo?";
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("h-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

ScrollReveal().reveal(".card", { delay: 5000 });
