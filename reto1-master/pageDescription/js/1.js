function d1() {
    f.innerHTML = "• Bachicher Academico<br>• Técnico en Contabilidad – SENA<br>• Estudiante Data Scientist";
    document.getElementById("f1").style.backgroundColor = "#00ffaaca";
    b1.style.backgroundColor = "#00ffaaca";
    b2.style.backgroundColor = "black";
    b3.style.backgroundColor = "black";
    b4.style.backgroundColor = "black";
}
function d2() {
    f.innerHTML = "• Vth<br>• Domo geodésico<br>• Centrifugadora de miel<br>• Plataforma de cursos virtuales (en desarollo)";
    f1.style.backgroundColor = "#00ffaaca";
    b2.style.backgroundColor = "#00ffaaca";
    b1.style.backgroundColor = "black";
    b3.style.backgroundColor = "black";
    b4.style.backgroundColor = "black";
}
function d3() {
    f.innerHTML = "• Correo electrónico: casgereda.1@gmail.com<br>• Teléfono: +57 3163748711<br>• Perfil de GitHub: andressantage<br>• Direccion: Esta si no<br>• Ubicación: Bucaramanga, Santander, Colombia";
    f1.style.backgroundColor = "#00ffaaca";
    b3.style.backgroundColor = "#00ffaaca";
    b1.style.backgroundColor = "black";
    b2.style.backgroundColor = "black";
    b4.style.backgroundColor = "black";
}
function d4() {
    f.innerHTML = "Dentro de mi experiencia personal y laboral he trabajado más de 100 horas a la semana durante un mes algo que me agrado por las cosas que pude avanzar durante este mes y principalmente por saber que puedo aguantar mucho cuando me toque emprender o trabajar a futuro.";
    f1.style.backgroundColor = "#00ffaaca";
    b4.style.backgroundColor = "#00ffaaca";
    b1.style.backgroundColor = "black";
    b3.style.backgroundColor = "black";
    b2.style.backgroundColor = "black";
}


var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var f = document.getElementById("f");
var f1 = document.getElementById("f1");

b1.addEventListener("click", d1);
b2.addEventListener("click", d2);
b3.addEventListener("click", d3);
b4.addEventListener("click", d4);
