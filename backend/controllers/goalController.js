const asyncHandler = require("express-async-Handler");
const { findByIdAndUpdate } = require("../models/goalModel");
const Goal = require("../models/goalModel");
//@desc GET all Goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

//@desc Create a new  Goal
//@route  POST /api/goals
//@access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a Goal");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(201).json(goal);
});

//@desc Udpate a  Goal
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//@desc Delete a  Goal
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
