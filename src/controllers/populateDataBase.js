import products from "../data/index.js";
import Products from "../schema/ProductSchema.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

const populateDb = async (req, res) => {
    await Products.insertMany(products)
    res.status(201).json({message:"The resources have been created in the database"})
};
