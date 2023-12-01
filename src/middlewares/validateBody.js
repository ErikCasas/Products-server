/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const validateBody = (req, res, next) => {
  const { body, method } = req;
    if (!Object.keys(body).length)
      return res.status(400).json({ error: "need data" });

    const expectedFields = [
      "price",
      "description",
      "stock",
      "photoUrl",
      "name",
      "sale",
    ];

    if (method === "POST") {
      const missingFields = expectedFields.filter(field => !(field in body));
      if (missingFields.length > 0) {
        return res.status(400).json({ error: "Missing fields", fields: missingFields });
      }
    }
    
    const isUnexpectedField = Object.keys(body).some(
      (key) => !expectedFields.includes(key)
    );
    if (isUnexpectedField) {
      return res
        .status(400)
        .json({ error: "Request body contains unexpected fields" });
    }
    const isType = (value, type) => typeof value === type;

    const typeError = {};

    const expectedType = {
      name: "string",
      price: "number",
      description: "string",
      photoUrl: "string",
      sale: "boolean",
      stock: "number",
    };

    for (const key in body) {
      if (!isType(body[key], expectedType[key])) {
        typeError[key] = `must be a value type ${expectedType[key]}`;
      }
    }

    Object.keys(typeError).length
      ? res.status(400).json({
          error: {
            message: "The body of the request meets the required data types",
            types: typeError,
          },
        })
      : next();
  }

export default validateBody;
