import products from "../data/index.js";
import Products from "../schema/ProductSchema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

const populateDb = async (req, res) => {
  try {
    await Products.insertMany(products);
    res
      .status(201)
      .json({ message: "The resources have been created in the database" });
  } catch (error) {
    console.log("error :>> ", error.message);
    res.status(500).json(error);
  }
};

export default populateDb;
