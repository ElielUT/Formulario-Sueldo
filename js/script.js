const formulario = document.getElementById("formulario");
formulario.addEventListener("submit",function(e){
    e.preventDefault();

    const num1 = document.getElementById("num1").value,
        num2 = document.getElementById("num2").value,
        producto = document.getElementById("producto");

    producto.innerHTML= num1 * num2;
})