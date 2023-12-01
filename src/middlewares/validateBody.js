/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

const validateBody = (req, res, next) => {
  const { method, body } = req;

  const expectedFields = ["price", "description", "stock", "photoUrl"];

  if (method === "POST" || method === "PUT") {
    const isUnexpectedField = Object.keys(body).some(
      (key) => !expectedFields.includes(key)
    );
    if (isUnexpectedField) {
      return res
        .status(400)
        .json({ error: "Request body contains unexpected fields" });
    }

    const isType = (value, type) => typeof value === type;

    if (
      !isType(body.description, "string") ||
      !isType(body.price, "number") ||
      !isType(body.sale, "boolean") ||
      !isType(body.stock, "number") ||
      !isType(body.photoUrl, "string")
      ) {
      return res.status(400).json({ error: "Invalid request body" });
    }
  }

  next();
};

export default validateBody;
