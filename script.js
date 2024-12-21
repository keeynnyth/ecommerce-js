// Simulación de API REST con fetch
// Referencias a elementos del DOM
const productosLista = document.getElementById("productos-lista");
const carritoContenido = document.getElementById("carrito-contenido");
const carritoVaciarBtn = document.getElementById("carrito-vaciar");
const carritoTotal = document.getElementById("carrito-total");

// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Funciones
async function cargarProductos() {
    try {
        // Simulamos el fetch de una API REST
        const response = await fetch("./productos.json");
        const productos = await response.json();

        productos.forEach(producto => {
            const productoCard = document.createElement("div");
            productoCard.classList.add("producto-card");
            productoCard.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            productosLista.appendChild(productoCard);
        });
    } catch (error) {
        console.error("Error al cargar los productos: ", error);
    }
}

function agregarAlCarrito(id) {
    const productoEnCarrito = carrito.find(p => p.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ id, cantidad: 1 });
    }

    actualizarCarrito();
    alert(`Producto agregado al carrito.`);
}

function actualizarCarrito() {
    carritoContenido.innerHTML = "";

    if (carrito.length === 0) {
        carritoContenido.innerHTML = "<p>Tu carrito está vacío.</p>";
        carritoVaciarBtn.style.display = "none";
        carritoTotal.textContent = `Total: $0 (0 productos)`;
    } else {
        let totalProductos = 0;
        let totalPrecio = 0;

        carrito.forEach(item => {
            totalProductos += item.cantidad;
            totalPrecio += item.cantidad * 20; // Precio fijo como placeholder

            const carritoItem = document.createElement("div");
            carritoItem.classList.add("carrito-item");
            carritoItem.innerHTML = `
                <p>Producto ID ${item.id} - $20 x ${item.cantidad}</p>
                <button onclick="eliminarUnoDelCarrito(${item.id})">Eliminar uno</button>
                <button onclick="eliminarDelCarrito(${item.id})">Eliminar todos</button>
            `;
            carritoContenido.appendChild(carritoItem);
        });

        carritoTotal.textContent = `Total: $${totalPrecio} (${totalProductos} productos)`;
        carritoVaciarBtn.style.display = "block";
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarUnoDelCarrito(id) {
    const productoEnCarrito = carrito.find(item => item.id === id);
    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
    } else {
        carrito = carrito.filter(item => item.id !== id);
    }
    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Eventos
carritoVaciarBtn.addEventListener("click", vaciarCarrito);

// Inicializar
cargarProductos();
actualizarCarrito();
