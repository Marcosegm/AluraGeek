// abrir http (método, url)

//CRUD - métodos HTTP
//(Create, Read, Update, Delete)
//Create - POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - DELETE 


const listaProductos = () => 
    fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearProducto = (name, imagenUrl, price, description, category) =>  {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({name, imagenUrl, price, description, category, id: uuid.v4() })
    });
};

export const clientServices = {
    listaProductos,
    crearProducto,
};




