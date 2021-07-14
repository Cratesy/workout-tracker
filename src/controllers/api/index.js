const { model } = require("mongoose");

const { Workout } = require("../../models");

const getWorkouts = async (req, res) => {
  try {
    const lastWorkout = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
    ]);
    return res.json(lastWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "failed to get last workout" });
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = req.body;

    const updateWorkout = await Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: exercise } },
      { new: true, runValidators: true }
    );
    return res.json(updateWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "failed to update workout" });
  }
};

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
