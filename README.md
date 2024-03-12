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