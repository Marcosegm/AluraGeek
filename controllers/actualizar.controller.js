import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        console.log("error")
    }

    const name = document.querySelector("[data-name]");
    const imagenUrl = document.querySelector("[data-url]");
    const price =  document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]");
    const category =  document.querySelector("[data-category]");


    clientServices.detalleProducto(id).then((producto) => {
        name.value  = producto.name;
        imagenUrl.value = producto.imagenUrl;
        price.value = producto.price;
        description.value = producto.description;
        category.value = producto.category;
    });
};


obtenerInformacion();

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const name = document.querySelector("[data-name]").value;
    const imagenUrl = document.querySelector("[data-url]").value;
    const price =  document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    const category =  document.querySelector("[data-category]").value;

    clientServices.actualizarProducto(name, imagenUrl, price, description, category, id)
    .then(() => {
        window.location.href="../screens/productos.html"
    })
});