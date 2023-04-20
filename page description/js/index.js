const data = [
    //Estudios
    "Licenciatura en Administración de Empresas, Universidad XYZ, 2015-2019. Durante mi licenciatura en Administración de Empresas, adquirí conocimientos sólidos en áreas como finanzas, marketing, recursos humanos y estrategia empresarial. También tuve la oportunidad de desarrollar habilidades en liderazgo y trabajo en equipo a través de proyectos colaborativos y actividades extracurriculares.",
    //Proyectos
    "Proyecto de consultoría para empresa X, Universidad XYZ, 2018. Trabajé en un proyecto de consultoría para una empresa local como parte de un curso de mi licenciatura en Administración de Empresas. El objetivo del proyecto fue ayudar a la empresa a mejorar su estrategia de marketing y aumentar su presencia en línea. Para ello, realicé un análisis de la presencia en línea de la empresa y de su competencia, y desarrollé una estrategia de marketing digital para mejorar su posicionamiento en los resultados de búsqueda y aumentar su tráfico web. Presenté los resultados y recomendaciones a la empresa en un informe detallado y una presentación.",
    //Contacto
    "Correo electrónico: ejemplo@correo.com Teléfono: +1 555-1234 Perfil de LinkedIn: linkedin.com/in/ejemplo Perfil de GitHub: github.com/ejemplo Ubicación: Ciudad, Estado, País"
]

let btn = document.getElementsByClassName("btn");
let panelTexto = document.getElementById("panel-texto");
for (let i = 0; i < btn.length; i++) {
    (i == 0 ) ? panelTexto.innerHTML = data[i] : "";
    btn[i].addEventListener("click", (e) => {
        
        let btnActive = document.getElementsByClassName("active-btn")
        for (let j = 0; j < btnActive.length; j++) {
            btnActive[j].classList.remove("active-btn");
        }
        btn[i].classList.add("active-btn");
        panelTexto.innerHTML = data[i];
    });
}