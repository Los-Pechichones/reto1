const data = [
    //Estudios
    "• Bachiller Academico<br>• Estudiante de ingenieria de sistemas, universidad industrial de santander<br>",
    //Proyectos
    "• Robot evasor de obstaculos a partir ultrasonidos <br>• Wordle App",
    //Contacto
    "• Correo electrónico: andreskevin2606@gmail.com<br>• Teléfono: +57 3172172768<br>• Perfil de GitHub: Kevin2606<br>",
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