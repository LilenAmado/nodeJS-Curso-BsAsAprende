/*
Para el
Readme

- Consultar Todos los Productos: 
Si ejecutas npm run start GET products, el programa debe realizar una petición asíncrona a la API y devolver la lista completa de productos en la consola.
Ejemplo: npm run start GET products

- Consultar un Producto Específico: 
Si ejecutas npm run start GET products/<productId>, el programa debe obtener y mostrar el producto correspondiente al productId indicado.
Ejemplo: npm run start GET products/15

- Crear un Producto Nuevo:
Si ejecutas npm run start POST products <title> <price> <category>, el programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados (title, price, category) y devolver el resultado en la consola.
Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras

- Eliminar un Producto:
Si ejecutas npm run start DELETE products/<productId>, el programa debe enviar una petición DELETE para eliminar el producto correspondiente al productId y devolver la respuesta en la consola.
Ejemplo: npm run start DELETE products/7
*/

import axios from 'axios'

const args = process.argv.slice(2);
const [method, endpoint, title, price, category] = args;
console.log(method, endpoint, title, price)
//const metodo = args[0]; 

const getProducts = async (id='') => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}

const postProducts = async (title, price, category) => {
  console.log(title, price, category)
  /**
      id	
      title	
      price	
      description	
      category	
      image	
  */
  const response = await getProducts()
  const body = { 
    id: response.length + 1, 
    title: title, 
    price: price, 
    category: category
  };

  console.log(body)
  // try {
  //   await axios.post('https://fakestoreapi.com/prperoducts', response.push(body));
  // } catch (error) {
  //   console.error(error);
  // }
  // console.log('Producto agregado.');
  // getProducts()
}

switch (method) {
  case 'GET':
    const path = endpoint.split('/');
    const recurso = path[0]
    const id = path[1];
    if (recurso === 'products') {
      console.log('Obteniendo productos...');
      getProducts(id)
    }
    break;
     
  case 'POST': // npm run start POST products title price category
    if (endpoint === 'products') {
      console.log('Agregando producto...');
      postProducts(title, price, category)
    }
    break;
  case 'PUT': 
    break;
} 