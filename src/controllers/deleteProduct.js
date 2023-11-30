import Products from "../schema/ProductSchema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const deleteProduct = await Products.findByIdAndDelete(productId);
    console.log({ deleteProduct });
    return deleteProduct ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).json(error);
  }
};

export default deleteProduct;
