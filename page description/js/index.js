function d1() {
    f.innerHTML = "Licenciatura en Administración de Empresas, Universidad XYZ, 2015-2019. Durante mi licenciatura en Administración de Empresas, adquirí conocimientos sólidos en áreas como finanzas, marketing, recursos humanos y estrategia empresarial. También tuve la oportunidad de desarrollar habilidades en liderazgo y trabajo en equipo a través de proyectos colaborativos y actividades extracurriculares.";
    document.getElementById("f1").style.backgroundColor = "#00ffaaca";
    b1.style.backgroundColor = "#00ffaaca";
    b2.style.backgroundColor = "black";
    b3.style.backgroundColor = "black";
    
}
function d2() {
    f.innerHTML = "Proyecto de consultoría para empresa X, Universidad XYZ, 2018. Trabajé en un proyecto de consultoría para una empresa local como parte de un curso de mi licenciatura en Administración de Empresas. El objetivo del proyecto fue ayudar a la empresa a mejorar su estrategia de marketing y aumentar su presencia en línea. Para ello, realicé un análisis de la presencia en línea de la empresa y de su competencia, y desarrollé una estrategia de marketing digital para mejorar su posicionamiento en los resultados de búsqueda y aumentar su tráfico web. Presenté los resultados y recomendaciones a la empresa en un informe detallado y una presentación.";
    document.getElementById("f1").style.backgroundColor = "#00ffaaca";
    document.getElementById("b2").style.backgroundColor = "#00ffaaca";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b3").style.backgroundColor = "black";
}
function d3() {
    f.innerHTML = "Correo electrónico: ejemplo@correo.com Teléfono: +1 555-1234 Perfil de LinkedIn: linkedin.com/in/ejemplo Perfil de GitHub: github.com/ejemplo Ubicación: Ciudad, Estado, País";
    document.getElementById("f1").style.backgroundColor = "#00ffaaca";
    document.getElementById("b3").style.backgroundColor = "#00ffaaca";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b2").style.backgroundColor = "black";
}
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var f = document.getElementById("f");
var f1 = document.getElementById("f1");
var q = document.querySelector(".gri-row")

b1.addEventListener("click", d1);
b2.addEventListener("click", d2);
b3.addEventListener("click", d3);
