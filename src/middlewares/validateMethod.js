/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const validateMethod = (req, res, next) => {
  const method = req.method;
  const methodsAllowed = ["GET", "POST", "PUT", "DELETE"];

  methodsAllowed.includes(method)
    ? next()
    : res.status(400).json({ message: "method not allowed" });
};

export default validateMethod;
