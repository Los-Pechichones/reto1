const data = [
    //Estudios
    "• Bachicher Academico con profundización en pedagogía<br>• Ingeniería en nanotecnología, universidad pontificia bolivariana<br>• Estudiante de física, universidad industrial de Santander",
    //Proyectos
    "• Cálculo computacional de factores de intensificación SERS en nanoesferas metálicas<br>• Desarrollo de etapa temprana de biosensor para la detección de Alzheimer en sangre con nanotubos de carbono y nanopartículas de plata",
    //Contacto
    "• Correo electrónico:  juanesteban.gomezgarcia@gmail.com<br>• Teléfono: +57 3187000224<br>• Perfil de GitHub: <br>• Direccion: <br>• Ubicación: Piedecuesta, Santander, Colombia",
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