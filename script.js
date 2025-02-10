document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío automático del formulario
        let isValid = true;

        // Recorremos todos los campos del formulario
        document.querySelectorAll(".form-control").forEach((input) => {
            const errorMessage = input.nextElementSibling; // Selecciona el mensaje de error correspondiente

            if (input.value.trim() === "") {
                errorMessage.style.display = "block"; // Muestra el mensaje de error
                isValid = false;
            } else {
                errorMessage.style.display = "none"; // Oculta el mensaje si el campo es válido
            }

            // Validación especial para el campo de email
            if (input.type === "email") {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value.trim())) {
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Por favor, ingresa un correo válido.";
                    isValid = false;
                }
            }
        });

        if (isValid) {
            form.submit(); // Si todo está correcto, envía el formulario
        }
    });
});
