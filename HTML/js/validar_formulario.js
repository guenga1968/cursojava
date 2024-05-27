function validarFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }
     // Validación de email
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if (!email.match(emailRegex)) {
         alert('Por favor, ingresa una dirección de correo electrónico válida.');
         return false;
     }

    return true;
}