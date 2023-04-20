const data = [
    //Estudios
    "• Bachicher Academico<br>• Técnico en Contabilidad – SENA<br>• Estudiante Data Scientist",
    //Proyectos
    "• Vth<br>• Domo geodésico<br>• Centrifugadora de miel<br>• Plataforma de cursos virtuales (en desarollo)",
    //Contacto
    "• Correo electrónico: casgereda.1@gmail.com<br>• Teléfono: +57 3163748711<br>• Perfil de GitHub: andressantage<br>• Direccion: Esta si no<br>• Ubicación: Bucaramanga, Santander, Colombia",
    //Plus
    "Dentro de mi experiencia personal y laboral he trabajado más de 100 horas a la semana durante un mes algo que me agrado por las cosas que pude avanzar durante este mes y principalmente por saber que puedo aguantar mucho cuando me toque emprender o trabajar a futuro."
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