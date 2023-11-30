import Products from "../schema/ProductSchema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

const getProductDetail = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Products.findById(productId);
    return product ? res.status(200).json({ product }) : res.sendStatus(404);
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).json(error);
  }
};
export default getProductDetail;
