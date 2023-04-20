function obtenerDatos(event){
    event.preventDefault()
    let nombre = document.getElementById("nombre").value
    let codigo = document.getElementById("codigo").value
    let saldo = parseInt(document.getElementById("saldo").value)
    let movimiento = parseInt(document.getElementById("movimiento").value)
    let categoriaCuenta = parseInt(document.getElementById("categoriaCuenta").value)
    let categoria = document.getElementById("categoriaCuenta").textContent
    let categoriaMovimiento = parseInt(document.getElementById("categoriaMovimiento").value)
    calcularSaldo(saldo,movimiento, categoriaCuenta, categoriaMovimiento)
    console.log(nombre,codigo,saldo,movimiento,categoriaCuenta,categoriaMovimiento)
}

function calcularSaldo(saldo,movimiento,categoriaCuenta,categoriaMovimiento){
    let total = 0;
    if (categoriaCuenta === categoriaMovimiento){
        total = saldo + movimiento
    } else{
        total = saldo - movimiento
    }
    imprimirHonorario(total)
}

function imprimirHonorario(total){
    let categoriaNum = parseInt(document.getElementById("categoriaCuenta").value)
    let categoria = categoriaNum === 1 ? "Débito" : "Crédito"
    let nombre = document.getElementById("nombre").value
    let codigo = document.getElementById("codigo").value
    let saldoFinal = document.getElementById("saldoFinal")
    let nombreFinal = document.getElementById("nombreFinal")
    let codigoFinal = document.getElementById("codigoFinal")
    let categoriaFinal = document.getElementById("categoriaFinal")
    saldoFinal.innerHTML = "$"+total.toLocaleString()
    nombreFinal.innerText = nombre
    codigoFinal.innerText = codigo
    categoriaFinal.innerText = categoria
}

let formulario = document.querySelector("#miFormulario")
let refrescar = document.querySelector("#refresh")
formulario.addEventListener("submit", obtenerDatos)
refrescar.addEventListener("click", e => {location.reload()})