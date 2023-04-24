const data = {
    1: 10000,
    2: 15000,
    3: 30000,
    4: 50000,
    5: 65000,
}

function calcularTarifaBas(){
    nombre = document.getElementById("nombre").value;
    estrato = document.getElementById("estrato").value;
    document.getElementById("nombreres").innerText = nombre;
    document.getElementById("categoria-a").innerText = estrato;
    document.getElementById("categoria-b").innerText = data[estrato] ? data[estrato] : "No existe estrato";
}