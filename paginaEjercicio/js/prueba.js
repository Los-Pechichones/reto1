function obtenerDatos(event){
    event.preventDefault()
    let nombre = document.getElementById("nombre").value
    let documento = document.getElementById("documento").value
    let horas = parseInt(document.getElementById("horas").value)
    let categoria = parseInt(document.getElementById("categoria").value)
    calcularHonorario(horas,categoria)
    console.log(nombre,documento,horas,categoria)
   
}

function calcularHonorario(horas,categoria){
    let valorHora = 0
    let cantidadA = 0
    let cantidadB = 0
    let cantidadC = 0
    switch(categoria){
        case 1:
            valorHora = 25000;
            cantidadA += 1;
            break;
        case 2:
            valorHora = 35000;
            cantidadB += 1;
            break;
        case 3:
            valorHora = 50000;
            cantidadC += 1;
            break;
    }
    valorPagar = horas*valorHora
    imprimirHonorario(valorPagar, cantidadA,cantidadB,cantidadC)

}

function imprimirHonorario(valorPagar,cantidadA,cantidadB,cantidadC){
    let honorarioDocente = document.getElementById("honorario-docente")
    let honorarioTotal = document.getElementById("honorario-total")
    let categoriaA = document.getElementById("categoria-a")
    let categoriaB = document.getElementById("categoria-b")
    let categoriaC = document.getElementById("categoria-c")
    honorarioDocente.innerHTML = "$"+valorPagar.toLocaleString()
    honorarioTotal.innerHTML = "$"+valorPagar.toLocaleString()
    categoriaA.innerText = cantidadA
    categoriaB.innerText = cantidadB
    categoriaC.innerText = cantidadC
}

let formulario = document.querySelector("#miFormulario")
let refrescar = document.querySelector("#refresh")
formulario.addEventListener("submit", obtenerDatos)
refrescar.addEventListener("click", e => {location.reload()})