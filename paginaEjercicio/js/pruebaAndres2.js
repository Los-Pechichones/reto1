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
        var nombre = document.getElementById("nombre").value.toUpperCase();;
        var k = parseInt(document.getElementById("k").value);
        let abc = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
        let letra = abc.split(" ");
        let cifrad = "";
        let x = letra.length;
        for (let i = 0; i < nombre.length; i++) {
            let c = nombre.charAt(i);
            for (let j = 0; j < x; j++) {
                if (c == letra[j]) {
                    let a = (j + k) % x;
                    cifrad = cifrad + letra[a];
                } else if (c == " ") {
                    cifrad = cifrad + " ";
                }
            }
        }   
        r1.innerHTML=cifrad;
}

let formulario = document.querySelector("#miFormulario")
let refrescar = document.querySelector("#refresh")
formulario.addEventListener("submit", obtenerDatos)
refrescar.addEventListener("click", e => {location.reload()})