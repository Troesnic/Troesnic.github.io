// Cargar el navbar en todas las páginas
document.addEventListener("DOMContentLoaded", function() {
    fetch("/navbar/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el navbar:", error));
});