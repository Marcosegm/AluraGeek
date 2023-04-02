// abrir http (método, url)

//CRUD - métodos HTTP
//(Create, Read, Update, Delete)
//Create - POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - DELETE 


const listaProductos = () => 
    fetch("https://6420f3ee82bea25f6d097324.mockapi.io/api/producto").then( (respuesta) => respuesta.json());


const crearProducto = (name, imagenUrl, price, description, category) =>  {
    return fetch("https://6420f3ee82bea25f6d097324.mockapi.io/api/producto", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({name, imagenUrl, price, description, category})
    });
};

const eliminarProducto = (id) => {
    return fetch(`https://6420f3ee82bea25f6d097324.mockapi.io/api/producto/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`https://6420f3ee82bea25f6d097324.mockapi.io/api/producto/${id}`)
    .then((respuesta) => respuesta.json()
    );
};

const actualizarProducto = (name, imagenUrl, price, description, category, id) => {
    return fetch(`https://6420f3ee82bea25f6d097324.mockapi.io/api/producto/${id}`, {
        method: "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({name, imagenUrl, price, description, category })
    })
    .then(respuesta => respuesta)
    .catch((error) => console.log(error));
}

export const clientServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};




