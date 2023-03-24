import { clientServices } from "../service/client-service.js";

const registro = document.querySelector("[data-form]");

registro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const imagenUrl = document.querySelector("[data-url]").value;
    const price =  document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    const category =  document.querySelector("[data-category]").value;

    clientServices
    .crearProducto(name, imagenUrl, price, description, category)
    .then(() => {
        window.location.href = "../screens/productos.html"
    })
    .catch(error => console.log(error))

});
