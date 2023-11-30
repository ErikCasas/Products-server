import Products from "../schema/ProductSchema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getAllProducts = async (_, res) => {
  try {
    const products = await Products.find();
    return products.length
      ? res.status(200).json({ products })
      : res.status(404).json({ message: "there is not products in database" });
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).json( error );
  }
};

export default getAllProducts;
