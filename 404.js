     // Función para hacer scroll al inicio de la página
     document.getElementById('btn-volver').addEventListener('click', function (e) {
        e.preventDefault(); // Evita comportamiento predeterminado del enlace
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });