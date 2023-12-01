import { Router } from "express";
import { validateBody } from "../middlewares/index.js";
import {
  getAllProducts,
  getProductDetail,
  deleteProduct,
  createProduct,
  updateProduct,
  populateDb,
} from "../controllers/_index.js";
const router = Router();

router.get("/populate", populateDb);
router.get("/:productId", getProductDetail);
router.get("/", getAllProducts);

router.post("/", validateBody, createProduct);

router.put("/:productId", validateBody, updateProduct);

router.delete("/:productId", deleteProduct);

export default router;
