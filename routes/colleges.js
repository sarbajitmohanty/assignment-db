import express from "express";

import {
  getColleges,
  getCollegesBySearch,
  getCollege,
  createCollege,
  updateCollege,
  deleteCollege,
} from "../controllers/college.js";

const router = express.Router();

router.get("/search", getCollegesBySearch);
router.get("/", getColleges);
router.get("/:id", getCollege);

router.post("/", createCollege);
router.patch("/:id", updateCollege);
router.delete("/:id", deleteCollege);
export default router;
