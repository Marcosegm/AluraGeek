import { clientServices } from "../service/client-service.js"

const crearNuevoProducto = (name, imagenUrl, price, id) => {
    const card = document.createElement("div")
    const contenido = 
        `
        <div class="product-card">
            <div class="img-container">
                <img src="${imagenUrl}" alt="">
                <button type="button" id="${id}"><span class="trash-icon"></span></button>
                <a href="../screens/editar-producto.html?id=${id}"><span class="pencil-icon"></span></a>
            </div>
            <div class="shopping-cart">
                <p class="cart-detail">${name}</p>
                <p class="cart-price">$${price}</p>
                <p class="id-producto">#${id}</p>
            </div>
        </div>`;
    card.innerHTML = contenido;
    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices.eliminarProducto(id)
        .then(respuesta => {
            console.log(respuesta);
        })
        .catch((error) => alert("Ocurrio un error"))
    });
    return card;
};

const cardContainer = document.querySelector("[data-card]");

clientServices.listaProductos()
.then((data) => {
    data.forEach ((producto) => {
        const nuevoProducto = crearNuevoProducto(producto.name, producto.imagenUrl, producto.price, producto.id );
        cardContainer.appendChild(nuevoProducto);
    });
})
.catch((error) => alert("Ocurrió un error"));
