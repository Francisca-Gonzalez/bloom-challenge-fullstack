import { Router } from "express";
import { getBrandById, listBrands } from "./brand";
import { listFAQs } from "./faq";

const router = Router();

router.get("/", (req, res) => {
	res.send("API is working.");
});
router.get("/brands", listBrands);
router.get("/brands/:id", getBrandById);
router.get("/faqs", listFAQs);

export default router;
