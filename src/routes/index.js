import { Router } from "express";
import Products from "../schema/ProductSchema.js";

const router = Router();

// router.use();

router.get("/", async (req, res) => {
  const products = await Products.find();
  res.json(products);
});
// router.get("/:id", (req, res) => {});
// router.post("/", (req, res) => {});
// router.put("/:id", (req, res) => {});
// router.delete("/:id", (req, res) => {});
export default router;
