
        function mostrarEstadoSesion() {
            var contenido = document.getElementById('contenido');
            var estadoSesion = document.getElementById('estadoSesion');
            var sesionIniciada = sessionStorage.getItem('usuario');

            if (sesionIniciada) {
                estadoSesion.innerHTML = '<p>Bienvenido, ' + sesionIniciada + '! <button onclick="cerrarSesion()">Cerrar Sesión</button></p>';
                contenido.style.display = 'block';
            } else {
                estadoSesion.innerHTML = '';
                contenido.style.display = 'none';
            }
        }

        function realizarAccion() {
            var nombreUsuario = document.getElementById('nombre').value;
            var accionBtn = document.getElementById('accionBtn');
            var accion = accionBtn.innerHTML;

            if (accion === 'Registrar') {
                sessionStorage.setItem('usuario', nombreUsuario);
                mostrarEstadoSesion();
            } else if (accion === 'Iniciar Sesión') {
                sessionStorage.setItem('usuario', nombreUsuario);
                mostrarEstadoSesion();
            }
            console.log(nombreUsuario);
            
        }

        function cerrarSesion() {
            sessionStorage.removeItem('usuario');
            mostrarEstadoSesion();
        }

        function limpiarFormulario() {
            document.getElementById('nombre').value = '';
            document.getElementById('contrasena').value = '';
            document.getElementById('correo').value = '';
        }

        window.onload = mostrarEstadoSesion;
    










