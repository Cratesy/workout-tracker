const { model } = require("mongoose");

const { Workout } = require("../../models");

const getWorkouts = (req, res) => {};

const updateWorkout = (req, res) => {};

const createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({});
    return res.json(workout);
  } catch (error) {
    console.log(error.message);
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
