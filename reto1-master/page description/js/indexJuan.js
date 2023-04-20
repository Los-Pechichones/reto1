const data = [
    //Estudios
    "• Bachiller Academico con profundización en pedagogía<br>• Ingeniería en nanotecnología, Universidad Pontificia Bolivariana<br>• Estudiante de física, Universidad Industrial de Santander",
    //Proyectos
    "• Cálculo computacional de factores de intensificación SERS en nanoesferas metálicas.<br>• Desarrollo en etapa temprana de biosensor para la detección de Alzheimer en sangre utilizando nanotubos de carbono y nanopartículas de plata.",
    //Contacto
    "• Correo electrónico:  juanesteban.gomezgarcia@gmail.com<br>• Teléfono: +57 3187000224<br>• Perfil de GitHub: Ju4n3z <br>• LinkedIn: https://www.linkedin.com/in/juan-esteban-gomez-garcia/ <br>• Ubicación: Piedecuesta, Santander, Colombia",
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