const sueldo = document.getElementById("sueldo"),
    meses = document.getElementById("meses"),
    nombre = document.getElementById("nombre"),
    resultado = document.getElementById("resultado"),
    calcular = document.getElementById("calcular");

calcular.addEventListener("click", function(){
    var mes = parseInt(meses.value),
        s = parseFloat(sueldo.value),
        extra = 0,
        total = 0;

    extra = (Math.floor(mes / 12) * 2000) + ((mes - (Math.floor(mes/12) * 12)) * 100);
    total = s + extra;

    resultado.innerHTML = "Hola " + nombre.value + ", tu aguinaldo es de: $" + extra + ", por lo que el total a pagar sera de: $" + total;
})