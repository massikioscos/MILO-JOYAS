const carrito = document.getElementById('carrito');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const elementos1 = document.getElementById('lista-1');

cargarEventListeners();

function cargarEventListeners() {
    if (elementos1) {
        elementos1.addEventListener('click', comprarElemento);
    }
    if (carrito) {
        carrito.addEventListener('click', eliminarElemento);
        vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    }
    document.addEventListener('DOMContentLoaded', cargarCarritoDesdeLocalStorage);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        const infoElemento = leerDatosElemento(elemento);
        insertarCarrito(infoElemento);
    }
}

function leerDatosElemento(elemento) {
    return {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    };
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${elemento.imagen}" width="100"></td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td><a href="#" class="borrar" data-id="${elemento.id}">X</a></td>
    `;
    lista.appendChild(row);
    guardarCarritoEnLocalStorage();
}

function eliminarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        guardarCarritoEnLocalStorage();
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    guardarCarritoEnLocalStorage();
}

function guardarCarritoEnLocalStorage() {
    const elementosCarrito = [];
    lista.querySelectorAll('tr').forEach(row => {
        const elemento = {
            imagen: row.querySelector('img').src,
            titulo: row.children[1].textContent,
            precio: row.children[2].textContent,
            id: row.querySelector('a').getAttribute('data-id')
        };
        elementosCarrito.push(elemento);
    });
    localStorage.setItem('carrito', JSON.stringify(elementosCarrito));
}

function cargarCarritoDesdeLocalStorage() {
    const elementosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    elementosCarrito.forEach(elemento => insertarCarrito(elemento));
}

function toggleMenu() {
    const menuItems = document.getElementById("menu-items");
    menuItems.style.display = menuItems.style.display === "none" ? "block" : "none";
}

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuario = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // Aquí puedes agregar la lógica de validación
    // Por ejemplo, verificar contra credenciales predefinidas
    if(usuario === "admin" && password === "admin") {
        // Redirigir a la página de administración
        window.location.href = 'admin/registro.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
