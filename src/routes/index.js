import { Router } from "express";
import {
  getAllProducts,
  getProductDetail,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/_index.js";
const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);
router.get("/:productId", getProductDetail);

export default router;
