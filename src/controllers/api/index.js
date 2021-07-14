const { model } = require("mongoose");

const { Workout } = require("../../models");

const getWorkouts = (req, res) => {};

const updateWorkout = (req, res) => {};

const createWorkout = (req, res) => {
  try {
    const Workout = await workout.create({});
    return res.json(Workout);
  } catch (error) {
    return res.status(500).json({ error: "failed to create workout" });
  }
};

const getAggregatedWorkout = (req, res) => {};

module.exports = {
  getWorkouts,
  updateWorkout,
  createWorkout,
  getAggregatedWorkout,
};
