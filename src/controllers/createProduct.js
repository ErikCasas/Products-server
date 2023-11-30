import Products from "../schema/ProductSchema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

const createProduct = async (req, res) => {
  const newProduct = req.body; //cambiar por product

  try {
    await new Products(newProduct).save();
    res.status(201).json({ message: "Product created" });
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).json(error);
  }
};

export default createProduct;
