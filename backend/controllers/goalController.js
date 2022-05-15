const asyncHandler = require("express-async-Handler");
//@desc GET all Goals
//@route  GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET all Goals" });
});

//@desc Create a new  Goal
//@route  POST /api/goals
//@access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a Goal");
  }
  res.status(201).json({ message: "POST on /api/goals" });
});

//@desc Udpate a  Goal
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `PUT on Goal number: ${req.params.id}` });
});

//@desc Delete a  Goal
//@route  DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
