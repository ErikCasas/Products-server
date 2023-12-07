<img src="https://media.ada-school.org/5fcd3ac12b22eab4d301d819/5fcd49a07ffe7b324996b784/ada-logo-cfdb7c7b-1791-408f-b5b4-240b22bd1653.png?version=2">

# Sever Ada-commerce

Este repositorio contiene una API REST construida con Express, diseñada para propósitos educativos. Es utilizada en sesiones de React para demostrar la integración de back-end y front-end.

Para iniciar el servidor primero se debe de clonar con el siguiente link

1. Clonar el repositorio:

```
git clone https://github.com/ErikCasas/Products-server.git
```

2. Cambiar al directorio del proyecto:

```
cd Products-server
```

3. Instalar dependencias:

```
npm install
```

3. poner a funcionar el servidor:

```
npm start
```

Antes de usar los endpoints, es necesario poblar la base de datos. Realiza una solicitud GET a `/api/products/populate` para agregar productos de ejemplo con la siguiente estructura:

      name: "string",
      price: "number",
      description: "string",
      photoUrl: "string",
      sale: "boolean",
      stock: "number",

**Nota**: Al crear o actualizar productos, asegúrate de que el JSON enviado coincida con esta estructura y los tipos de datos correctos.

## Endpoints

Los siguientes endpoints están disponibles:

| verbo HTTP | end point                | funcionalidad                               |
| ---------- | ------------------------ | ------------------------------------------- |
| GET        | /api/products/populate   | Poblar la base de datos con datos de prueba |
| GET        | /api/products/           | Obtener todos los productos                 |
| GET        | /api/products/:productId | Obtener un producto específico              |
| POST       | /api/products/           | Crear un nuevo producto                     |
| PUT        | /api/products/:productId | Editar un producto existente                |
| DELETE     | /api/products/:productId | Eliminar un producto existente              |

\*`:productId` es un identificador del tipo ObjectId de Mongoose.
