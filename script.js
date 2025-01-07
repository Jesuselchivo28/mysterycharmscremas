// Inicializa EmailJS
(function () {
    emailjs.init("xFtPsPsHAAspwFkhm"); // Sustituye "TU_CLAVE_PUBLICA" con tu clave pública de EmailJS
})();

document.getElementById("contactForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Enviando mensaje...";

    const formData = {
        from_name: document.getElementById("nombre").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("mensaje").value,
    };

    emailjs.send("service_nldgtii", "template_ro0qt5q", formData).then(
        function () {
            statusMessage.textContent = "Mensaje enviado correctamente. ¡Gracias por contactarnos!";
            document.getElementById("contactForm").reset();
        },
        function (error) {
            statusMessage.textContent = "Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.";
            console.error("Error:", error);
        }
    );
});

// Función para leer texto en voz alta
function leerTexto(texto) {
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = "es-ES";
    window.speechSynthesis.speak(speech);
}

// Asigna eventos a los botones de lectura
document.querySelectorAll(".leer-texto").forEach((boton) => {
    boton.addEventListener("click", () => {
        const textoId = boton.getAttribute("data-text");
        const texto = document.getElementById(textoId).textContent;
        leerTexto(texto);
    });
});