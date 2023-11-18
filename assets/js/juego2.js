const formulario = document.getElementById("miFormulario");
        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que la página se recargue al enviar el formulario
            
            // Capturamos los valores de los campos de entrada
            const nombre = document.getElementById("nombre").value;
            const contrasena = document.getElementById("contrasena").value;
            const correo = document.getElementById("correo").value;

            // Mostramos los valores en la consola
            console.log("Nombre: " + nombre);
            console.log("Contraseña: " + contrasena);
            console.log("Correo: " + correo);
        });
        document.getElementById("limpiar").addEventListener("click", function() {
            document.getElementById("nombre").value = "";
            document.getElementById("contrasena").value = "";
            document.getElementById("correo").value = "";
        });
        
    










