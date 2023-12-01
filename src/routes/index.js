import { Router } from "express";
import {
  getAllProducts,
  getProductDetail,
  deleteProduct,
  createProduct,
  updateProduct,
  populateDb
} from "../controllers/_index.js";
const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);
router.get("/:productId", getProductDetail);
router.get("/populate", populateDb)

export default router;
