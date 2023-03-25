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

const productInfoContainer = document.querySelector("[data-info]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 
    
    clientServices.listaProductos(id)
    .then((data) => {
        data.forEach ((producto) => {
            if (producto.id === id) {
                const info = detalleProducto(producto.name, producto.imagenUrl, producto.price, producto.description );
                productInfoContainer.appendChild(info);
            }
        });
    })
    .catch((error) => alert("Ocurrió un error"));

}
obtenerInformacion();

