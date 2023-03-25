import { clientServices } from "../service/client-service.js"

const detalleProducto = (name, imagenUrl, price) => {
    const card = document.createElement("div")
    const contenido = 
        `
        <div class="product-card">
            <img src="${imagenUrl}" >
            <div class="shopping-cart">
                <p class="cart-detail">${name}</p>
                <p class="cart-price">$ ${price}</p>
                <a href="">Ver producto</a>
                </div>
        </div> `;
    card.innerHTML = contenido;
    return card;
};



const cardContainer1 = document.querySelector("[data1-product]");
const cardContainer2= document.querySelector("[data2-product]");
const cardContainer3= document.querySelector("[data3-product");



clientServices.listaProductos()
.then((data) => {
    data.forEach ((producto) => {
        if (producto.category == "Star Wars") {
            const nuevoProducto = detalleProducto(producto.name, producto.imagenUrl, producto.price);
            cardContainer1.appendChild(nuevoProducto);
        }else if (producto.category == "Consolas") {
            const nuevoProducto = detalleProducto(producto.name, producto.imagenUrl, producto.price);
            cardContainer2.appendChild(nuevoProducto);
        }else if (producto.category == "Diversos") {
            const nuevoProducto = detalleProducto(producto.name, producto.imagenUrl, producto.price);
            cardContainer3.appendChild(nuevoProducto);
        }
    });
})
.catch((error) => alert("Ocurrió un error"));
