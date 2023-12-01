import Products from "../schema/ProductSchema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

const updateProduct = async (req, res) => {
  try {
    const newInfoProduct = req.body;
    const { productId } = req.params;
    const info = await Products.findByIdAndUpdate(productId, newInfoProduct);
    res.status(201).json({ message: "the product has been update" });
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).json(error);
  }
};

export default updateProduct;
