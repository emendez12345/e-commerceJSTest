// Función para obtener productos
async function obtenerProductos() {
    try {
        const response = await fetch('http://localhost:4000/productos/obtener');
        if (!response.ok) {
            throw new Error('Error en la red');
        }
        const productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

// Función para mostrar los productos en tarjetas
function mostrarProductos(productos) {
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = ''; // Limpiar contenido anterior

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = producto.imagen; // Asume que el producto tiene un campo 'imagen'
        img.alt = producto.descripcion;

        const title = document.createElement('h2');
        title.textContent = producto.descripcion;

        const price = document.createElement('p');
        price.textContent = `${producto.precio} USD`;

        // Contenedor para tallas y colores
        const tallasContainer = document.createElement('div');

        producto.tallas.forEach(talla => {
            const tallaBtn = document.createElement('button');
            tallaBtn.innerText = talla.nombre;
            tallaBtn.onclick = () => mostrarColores(talla.colores, card); // Mostrar colores en la tarjeta correspondiente
            tallasContainer.appendChild(tallaBtn);
        });

        const coloresContainer = document.createElement('div');
        coloresContainer.className = 'colores-container'; // Estilo para los colores
        card.appendChild(coloresContainer); // Agregar contenedor de colores en la tarjeta

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(tallasContainer);
        card.appendChild(coloresContainer); // Agregar el contenedor de colores
        lista.appendChild(card);
    });
}

// Mostrar colores de una talla dentro de la tarjeta
function mostrarColores(colores, card) {
    const coloresContainer = card.querySelector('.colores-container');
    coloresContainer.innerHTML = ''; // Limpiar contenido anterior

    colores.forEach(color => {
        const colorBtn = document.createElement('button');
        colorBtn.innerText = color.nombre;
        colorBtn.onclick = () => mostrarFotos(color.fotos, coloresContainer); // Mostrar fotos al hacer clic
        coloresContainer.appendChild(colorBtn);
    });
}

// Mostrar fotos de un color dentro del contenedor de colores
function mostrarFotos(fotos, coloresContainer) {
    const fotosDiv = document.createElement('div');
    fotosDiv.className = 'fotos'; // Estilo para las fotos
    fotosDiv.innerHTML = ''; // Limpiar contenido anterior

    fotos.forEach(foto => {
        const img = document.createElement('img');
        img.src = foto;
        img.alt = foto;
        img.style.width = '50px'; // Tamaño de la imagen
        fotosDiv.appendChild(img);
    });

    coloresContainer.appendChild(fotosDiv); // Agregar el contenedor de fotos al contenedor de colores
}

// Inicializar
obtenerProductos();
