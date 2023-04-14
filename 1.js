function f1()
{
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
        var t1 = document.getElementById("t1").value.toUpperCase();
        let caracter = "";
        for (let i = 0; i < t1.length; i++) {
        const c = t1.charAt(i);
        if (dic[c] === undefined) {
        caracter += c;
        } else {
        caracter += dic[c];
        }
        }
        r1.innerHTML="El resultado de la codificacion es: "+caracter;
}
c1.addEventListener("click", f1);

function f2(){
    var t2 = document.getElementById("t2").value.toUpperCase();;
    var k = parseInt(document.getElementById("k").value);
    let abc = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
    let letra = abc.split(" ");
    let cifrad = "";
    let x = letra.length;
    for (let i = 0; i < t2.length; i++) {
        let c = t2.charAt(i);
        for (let j = 0; j < x; j++) {
            if (c == letra[j]) {
                let a = (j + k) % x;
                cifrad = cifrad + letra[a];
            } else if (c == " ") {
                cifrad = cifrad + " ";
            }
        }
    }   
    r2.innerHTML="El resultado del cifrado es: "+cifrad;
}
c2.addEventListener("click", f2);
