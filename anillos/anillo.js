     // Función para hacer scroll al inicio de la página
     document.getElementById('btn-volver').addEventListener('click', function (e) {
        e.preventDefault(); // Evita comportamiento predeterminado del enlace
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const carrito = document.querySelector('#carrito');
        const carritoIcono = document.querySelector('.navbar');
    
        // Muestra el carrito cuando se pasa el mouse sobre la barra de navegación
        carritoIcono.addEventListener('mouseenter', () => {
            carrito.style.display = 'block';
        });
    
        // Oculta el carrito cuando el mouse sale del área del carrito
        carrito.addEventListener('mouseleave', () => {
            carrito.style.display = 'none';
        });
    
        // Añadir funcionalidad a los botones de 'Agregar al carrito'
        document.querySelectorAll('.agregar-carrito').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const producto = e.target.parentElement;
                const infoProducto = {
                    imagen: producto.querySelector('img').src,
                    nombre: producto.querySelector('h3').textContent,
                    precio: producto.querySelector('.precio').textContent
                };
                agregarProductoAlCarrito(infoProducto);
            });
        });
    
        // Función para agregar productos al carrito
        function agregarProductoAlCarrito(producto) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${producto.imagen}" width="50"></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td><a href="#" class="borrar-producto">X</a></td>
            `;
            document.querySelector('#lista-carrito tbody').appendChild(row);
        }
    
        // Eliminar productos del carrito
        document.querySelector('#lista-carrito').addEventListener('click', (e) => {
            if (e.target.classList.contains('borrar-producto')) {
                e.target.parentElement.parentElement.remove();
            }
        });
    
        // Vaciar carrito
        document.querySelector('#vaciar-carrito').addEventListener('click', () => {
            document.querySelector('#lista-carrito tbody').innerHTML = '';
        });
    });
    

         // Función para hacer scroll al inicio de la página
         document.getElementById('btn-volver').addEventListener('click', function (e) {
            e.preventDefault(); // Evita comportamiento predeterminado del enlace
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Desplazamiento suave
            });
        });