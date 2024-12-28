// import express and controller functions
import express from "express";
import { getItems, makeItem, editItem, deleteItem } from "../controllers/controller.js";
// Make router and call certain methods (with all items or just one) based on the controller functions
const router = express.Router();
router.get("/", getItems);
router.post("/", makeItem);
router.put("/:id", editItem);
router.delete("/:id", deleteItem);
// Export router
export default router;