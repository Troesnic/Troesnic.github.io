document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulación de envío
    setTimeout(function() {
        document.getElementById("mensajeExito").style.display = "block";
        document.getElementById("formContacto").reset();
    }, 500);
});