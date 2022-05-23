import express from "express";
import mongoose from "mongoose";

import College from "../models/collegeModel.js";

const router = express.Router();

export const getColleges = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;

    const total = await College.countDocuments({});
    const colleges = await College.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: colleges,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCollegeBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const colleges = await College.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: colleges });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCollege = async (req, res) => {
  const { id } = req.params;

  try {
    const college = await College.findById(id);

    res.status(200).json(college);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCollege = async (req, res) => {
  const college = req.body;

  const newCollege = new College({
    ...college,
  });

  try {
    await newCollege.save();

    res.status(201).json(newCollege);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCollege = async (req, res) => {
  const { id } = req.params;
  const { name, type, state, district, city } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No college with id: ${id}`);

  const updatedCollege = { name, type, state, district, city, _id: id };

  await College.findByIdAndUpdate(id, updatedCollege, { new: true });

  res.json(updatedCollege);
};

export const deleteCollege = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await College.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
