// Ejemplo de credenciales para el administrador (esto debería manejarse en el backend para mayor seguridad)
const adminCredentials = {
    username: 'admin',
    password: '1234' // Cambia la contraseña para mayor seguridad
};

// Evento de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica si las credenciales coinciden con las del administrador
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Muestra la sección de administración si el usuario es admin
        document.getElementById('adminSection').style.display = 'block';
    } else {
        alert('Credenciales incorrectas o permisos insuficientes');
    }
});

// Evento para manejar el formulario de productos
document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productInfo = document.getElementById('productInfo').value;
    const productImage = document.getElementById('productImage').files[0];
    const productCategory = document.getElementById('productCategory').value;

    // Crear un elemento de imagen (previsualización)
    const reader = new FileReader();
    reader.onload = function(e) {
        // Crear el contenedor del producto
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');

        // Añadir el contenido del producto al contenedor
        productContainer.innerHTML = `
            <h4>${productName}</h4>
            <p>Precio: $${productPrice}</p>
            <p>Información: ${productInfo}</p>
            <p>Categoría: ${productCategory}</p>
            <img src="${e.target.result}" alt="${productName}" width="100">
        `;

        // Añadir el contenedor del producto a la lista de productos
        document.getElementById('productList').appendChild(productContainer);
    };

    // Leer el archivo de imagen como URL de datos para previsualización
    reader.readAsDataURL(productImage);

    // Limpiar el formulario
    document.getElementById('productForm').reset();
});
