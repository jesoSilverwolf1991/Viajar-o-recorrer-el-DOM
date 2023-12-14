document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const contrasenaInput = document.getElementById('contrasena');

    formulario.addEventListener('submit', function (event) {
        if (!validarNombre()) {
            event.preventDefault();
        }

        if (!validarEmail()) {
            event.preventDefault();
        }

        if (!validarContrasena()) {
            event.preventDefault();
        }
    });

    nombreInput.addEventListener('input', validarNombre);
    emailInput.addEventListener('input', validarEmail);
    contrasenaInput.addEventListener('input', validarContrasena);

    function validarNombre() {
        const nombreValor = nombreInput.value.trim();
        const errorNombre = document.getElementById('errorNombre');

        if (nombreValor === '') {
            errorNombre.textContent = 'El nombre es obligatorio';
            return false;
        } else {
            errorNombre.textContent = '';
            return true;
        }
    }

    function validarEmail() {
        const emailValor = emailInput.value.trim();
        const errorEmail = document.getElementById('errorEmail');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValor === '') {
            errorEmail.textContent = 'El email es obligatorio';
            return false;
        } else if (!emailRegex.test(emailValor)) {
            errorEmail.textContent = 'El email no es válido';
            return false;
        } else {
            errorEmail.textContent = '';
            return true;
        }
    }

    function validarContrasena() {
        const contrasenaValor = contrasenaInput.value.trim();
        const errorContrasena = document.getElementById('errorContrasena');

        if (contrasenaValor.length < 6) {
            errorContrasena.textContent = 'La contraseña debe tener al menos 6 caracteres';
            return false;
        } else {
            errorContrasena.textContent = '';
            return true;
        }
    }
});
