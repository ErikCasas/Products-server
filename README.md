# Sever Ada-commerce

Esta es una API rest echa en express creada con fines educativos para ser cosumida en las sesiones de React con el fin de demostrar el como se integran las partes del back-end y del front-end.

Para iniciar el servidor primero se debe de clonar con el siguiente link

```
https://github.com/ErikCasas/Products-server.git
```

luego ejecutar los siguientes comandos en su respectivo orden

```
cd Products-server
```

```
npm install
```

```
npm start
```

Antes de explorar los endponts definidos en el servidor, debes de realizar una solicitud de tipo GET al endpoint de `/api/products/populate` con el fin de llenar la base de datos con los documentos sugeridos para las practicas, esto llenara la base de datos con productos que tendran la siguiente estructura:

      name: "string",
      price: "number",
      description: "string",
      photoUrl: "string",
      sale: "boolean",
      stock: "number",

Es importante tener presente esta estructura ya que al crear o actaulizar un documento, el servidor no aceptara ninguna solicitud cuya carga JSON traiga información distinta a la esperada y/o que no sea del tipo de dato esperado

## End Points

##### :productId: id de tipo ObjectId de mongoose

| verbo HTTP | end point                | funcionalidad                           |
| ---------- | ------------------------ | --------------------------------------- |
| GET        | /api/products/populate   | llenar la base de datos                 |
| GET        | /api/products/           | responde con todos los docuementos      |
| GET        | /api/products/:productId | responde con un documento en especifico |
| POST       | /api/products/           | crear un nuevo producto                 |
| PUT        | /api/products/:productId | edita un producto existente             |
| DELETE     | /api/products/:productId | elimina un producto existente           |
