import { clientServices } from "../service/client-service.js"

const detalleProducto = (name, imagenUrl, price,description) => {
    const card = document.createElement("div")
    const contenido = 
        `
        <div class="container-imagen">
            <img src="${imagenUrl}" alt="">
        </div>
        <div class="descripcion-producto">
            <h2>${name}</h2>
            <p>$${price}</p>
            <p>${description}</p>
        </div>`;
    card.innerHTML = contenido;
    card.classList.add("info-detalle");
    return card;
};

const productoSimilares = (name, imagenUrl, price, id) => {
    const card = document.createElement("div")
    const contenido = 
        `
        <div class="product-card">
            <img src="${imagenUrl}" >
            <div class="shopping-cart">
                <p class="cart-detail">${name}</p>
                <p class="cart-price">$ ${price}</p>
                <a href="../screens/info-producto.html?id=${id}">Ver producto</a>
                </div>
        </div> `;
    card.innerHTML = contenido;
    return card;
};

const productInfoContainer = document.querySelector("[data-info]");
const productoSimilar = document.querySelector("[data-product]");



const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
   
    clientServices.listaProductos()
    .then((data) => {
        data.forEach ((producto) => {
            if (producto.id === id) {
                const info = detalleProducto(producto.name, producto.imagenUrl, producto.price, producto.description );
                productInfoContainer.appendChild(info);
            } 
        });
    })
    .catch((error) => alert("Ocurrió un error en info producto"));
};



const obtenerDetallesProductosSimilares = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
   
    clientServices.detalleProducto(id)
    .then((data) => {
        const categoria = data.category;
        const idProducto = data.id;

        clientServices.listaProductos()
        .then((dato) => {
            dato.forEach ((producto) => {
                if (producto.category === categoria && producto.id!=idProducto) {
                    const productoS = productoSimilares(producto.name, producto.imagenUrl, producto.price, producto.id);
                    productoSimilar.appendChild(productoS); 
                } 
            });
        })
        .catch((error) => alert("Ocurrió un error en info producto"));
    })
    .catch((error) => alert("Ocurrió un error en info producto"));
};

obtenerDetallesProductosSimilares();
obtenerInformacion();
