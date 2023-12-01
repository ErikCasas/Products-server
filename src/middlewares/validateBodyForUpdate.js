/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const validateBodyForUpdate = (req, res, next) => {
  const { method, body } = req;

  const expectedFields = [
    "price",
    "description",
    "stock",
    "photoUrl",
    "name",
    "sale",
  ];
  if (method === "PUT") {
    const isUnexpectedField = Object.keys(body).some(
      (key) => !expectedFields.includes(key)
    );
    if (isUnexpectedField) {
      return res
        .status(400)
        .json({ error: "Request body contains unexpected fields" });
    }
    const isType = (value, type) => typeof value === type;

    body.description &&
      !isType(body.description, "string") &&
      res.status(400).json({ error: "type of description is invalid" });

    body.price &&
      !isType(body.price, "number") &&
      res.status(400).json({ error: "type of price is invalid" });

    body.sale &&
      !isType(body.sale, "boolean") &&
      res.status(400).json({ error: "type of sale is invalid" });

    body.stock &&
      !isType(body.stock, "number") &&
      res.status(400).json({ error: "type of stock is invalid" });

    body.name &&
      !isType(body.name, "string") &&
      res.status(400).json({ error: "type of name is invalid" });

    body.photoUrl &&
      !isType(body.photoUrl, "string") &&
      res.status(400).json({ error: "type of photoUrl is invalid" });
    // if (
    //   !isType(body.description, "string") ||
    //   !isType(body.price, "number") ||
    //   !isType(body.sale, "boolean") ||
    //   !isType(body.stock, "number") ||
    //   !isType(body.name, "string") ||
    //   !isType(body.photoUrl, "string")
    // ) {
    //   return res.status(400).json({ error: "Invalid request body" });
    // }
  }

  next();
};

export default validateBodyForUpdate;
