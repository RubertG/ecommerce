# Ecommerce

Fake store-eccomerce with different products such as household appliances, clothing for men and women, and caps.

This project has Firebase's database and authentication. The API and frontend are done with NextJS 14

## API Endpoints
```/api```

- ```/products``` -> **GET**: Get all the products  

  - ```/[id]``` -> **GET**: Get the product by id
  - ```/category/[name]``` -> **GET**: Get all the products filters by category

- ```/categories``` -> **GET**: Get all the categories  

  - ```/[name]``` -> **GET**: Get the category by name

- ```/carts``` -> **GET**: Get all the carts.
                  **POST**: Save cart (Private)        

  - ```/[id]``` -> **GET**: Get the cart by id

### TODO
#### Actualizar API
[x] Que todos los productos sean en español
[x] Pasar la página al español

#### Metodo de pago por mercado pago Checkout pro
[] Hacer el paso a paso del client-side: Hacer pagina que pida datos personales y lugar donde vive. 
[] Agregar botón de pago con mercado pago a la página anterior
[] Hacer el paso a paso del server-side (Api): Que devuelva todo lo referente al pago  
[] Cuando la compra sea aceptada mandar a `/purchase?type=${el tipo de la compra}` y que muestre el tipo de compra con su mensaje correspondiente