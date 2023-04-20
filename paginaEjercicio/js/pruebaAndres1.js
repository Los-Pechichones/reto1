function obtenerDatos(event)
{
    event.preventDefault()
    const dic={
        "A":"..-...",
        "B":"-.....",
        "C":".-.-..",
        "D":"..-...",
        "E":"...-..",
        "F":"-...-.",
        "G":"..-.-.",
        "H":".--...",
        "I":"--..-.",
        "J":"...--.",
        "K":".---..",
        "L":"--....",
        "M":".---..",
        "N":"---...",
        "O":"--..-.",
        "P":"-..--.",
        "Q":"....-.",
        "R":"..-...",
        "S":"-....-",
        "T":".-.-.-",
        "U":"..-..-",
        "V":"...-.-",
        "W":"-...--",
        "X":"..-.--",
        "Y":".--..-",
        "Z":"--..--",
        " ":"------",
        };
        let nombre = document.getElementById("nombre").value.toUpperCase()
        let caracter = "";
        for (let i = 0; i < nombre.length; i++) {
        const c = nombre.charAt(i);
        if (dic[c] === undefined) {
        caracter += c;
        } else {
        caracter += dic[c];
        }
        }
        r1.innerHTML=caracter;
}

let formulario = document.querySelector("#miFormulario")
let refrescar = document.querySelector("#refresh")
formulario.addEventListener("submit", obtenerDatos)
refrescar.addEventListener("click", e => {location.reload()})