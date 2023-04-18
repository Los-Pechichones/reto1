var cantidadA = 0
var cantidadB = 0
var cantidadC = 0
var valorTotal = 0

function obtenerDatos(){
    let nombre = document.getElementById("nombre").value
    let documento = document.getElementById("documento").value
    let horas = parseInt(document.getElementById("horas").value)
    let categoria = parseInt(document.getElementById("categoria").value)
    calcularHonorario(horas,categoria)

}

function calcularHonorario(horas,categoria){
    let valorHora = 0
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
    valorTotal += valorPagar
    imprimirHonorario(valorPagar)

}

function imprimirHonorario(valorPagar){
    let honorarioDocente = document.getElementById("honorario-docente")
    let honorarioTotal = document.getElementById("honorario-total")
    let categoriaA = document.getElementById("categoria-a")
    let categoriaB = document.getElementById("categoria-b")
    let categoriaC = document.getElementById("categoria-c")
    honorarioDocente.innerHTML = valorPagar 
}