document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro-form");
    const email = document.getElementById("email");
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");
    const errorList = document.getElementById("error-list");
    const successMessage = document.getElementById("success-message");
    const resetButton = document.getElementById("reset-button");
    const resultContainer = document.getElementById("result-container");
    const resultNombre = document.getElementById("result-nombre");
    const resultEmail = document.getElementById("result-email");
    const resultMensaje = document.getElementById("result-mensaje");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        errorList.innerHTML = "";
        nombre.classList.remove("error");
        mensaje.classList.remove("error");
        email.classList.remove("error");

        if (!isValidEmail(email.value)) {
            showError("El correo electrónico no es válido.");
            email.classList.add("error");
        }

        if (nombre.value.trim() === "" || mensaje.value.trim() === "") {
            showError("Complete los campos.");
            nombre.classList.add("error");
            mensaje.classList.add("error");
        }

        if (errorList.children.length === 0) {
            form.style.display = "none";
            successMessage.style.display = "none";

            // Muestra los datos ingresados
            resultNombre.textContent = nombre.value;
            resultEmail.textContent = email.value;
            resultMensaje.textContent = mensaje.value;
            resultContainer.style.display = "block";
        }
    });

    resetButton.addEventListener("click", function () {
        form.style.display = "block";
        successMessage.style.display = "none";
        resultContainer.style.display = "none";
        form.reset();
    });

    function isValidEmail(email) {
        const emailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        return emailPattern.test(email);
    }

    function showError(message) {
        const errorItem = document.createElement("li");
        errorItem.textContent = message;
        errorList.appendChild(errorItem);
    }
});
