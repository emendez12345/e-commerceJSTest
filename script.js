// Función para obtener productos
/*async function obtenerProductos() {
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
obtenerProductos();*/

const producto = {
    tallas: [
        { nombre: 'S', colores: [{ nombre: 'Rojo', fotos: ['rojo1.jpg', 'rojo2.jpg'] }, { nombre: 'Azul', fotos: ['azul1.jpg', 'azul2.jpg'] }] },
        { nombre: 'M', colores: [{ nombre: 'Verde', fotos: ['verde1.jpg', 'verde2.jpg'] }, { nombre: 'Negro', fotos: ['negro1.jpg', 'negro2.jpg'] }] },
    ]
};

function mostrarTallas() {
    const tallasDiv = document.getElementById('tallas');
    tallasDiv.innerHTML = '';

    producto.tallas.forEach(talla => {
        const tallaBtn = document.createElement('button');
        tallaBtn.innerText = talla.nombre;
        tallaBtn.onclick = () => mostrarColores(talla.colores);
        tallasDiv.appendChild(tallaBtn);
    });
}

function mostrarColores(colores) {
    const coloresDiv = document.getElementById('colores');
    coloresDiv.innerHTML = '';
    coloresDiv.classList.remove('hidden');
    const fotosDiv = document.getElementById('fotos');
    fotosDiv.classList.add('hidden');

    colores.forEach(color => {
        const colorBtn = document.createElement('button');
        colorBtn.innerText = color.nombre;
        colorBtn.onclick = () => mostrarFotos(color.fotos);
        coloresDiv.appendChild(colorBtn);
    });
}

function mostrarFotos(fotos) {
    const fotosDiv = document.getElementById('fotos');
    fotosDiv.innerHTML = '';
    fotosDiv.classList.remove('hidden');

    fotos.forEach(foto => {
        const img = document.createElement('img');
        img.src = foto;
        img.alt = foto;
        img.style.width = '100px'; // Tamaño de la imagen
        fotosDiv.appendChild(img);
    });
}

// Inicializar
mostrarTallas();

