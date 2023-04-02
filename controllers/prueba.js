const listaProductos = () => {
    return fetch("https://6420f3ee82bea25f6d097324.mockapi.io/api/producto")
    .then( respuesta => respuesta.json())
    .catch(error => console.log(error))
};

listaProductos().then((data) => {
    data.forEach ((producto) => {
        console.log(producto.name, producto.imagenUrl, producto.price, producto.id );
        
    });
})
.catch(error => console.log(error))
