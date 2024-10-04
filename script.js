// Función para obtener productos
async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:4000/productos/obtener'); // Cambia la URL según tu configuración
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const productos = await response.json();
        mostrarProductos(productos); // Llama a la función para mostrar los productos
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

// Función para mostrar los productos en la lista
function mostrarProductos(productos) {
    const lista = document.getElementById('lista-productos');
    productos.forEach(producto => {
        console.log(producto.Tallas)
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto.precio} USD`;
        lista.appendChild(li);
    });
}

// Llama a la función para obtener los productos al cargar la página
obtenerProductos();
