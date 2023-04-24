const data = [
    //Estudios
    "• Bachiller Academico con profundización en pedagogía<br>• Ingeniero Mecátronico, Universidad Santo Tomas<br>• Especialización en Automatización Industrial, Universidad Santo Tomas",
    //Proyectos
    "• Sistema de control de posición para actuador industrial FESTO por medio de PLC Siemens<br>• Sistema de estabilización para un cohete <br>• Analisis para identificación de tostado correcto en cafe",
    //Contacto
    "• Correo electrónico: eddacoam7.2@gmail.com<br>• Teléfono: +57 3222600908<br>• Perfil de GitHub: Edwarcorredor<br>• Direccion: Cra 12 #22-30n<br>• Ubicación: Bucaramanga, Santander, Colombia",
    //Plus
    "Tengo experiencia como ingeniero de digital manufacturing en la empresa Kimberly Clark, se realizó el sistema SCADA en la nube con la ayuda del software OSI para manipulación del historial de los sensores, generando analisis y eventos para notificaciones oportunas."
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