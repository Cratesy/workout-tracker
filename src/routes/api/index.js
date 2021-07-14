const { Router } = require("express");
const {
  getWorkouts,
  updateWorkout,
  createWorkout,
  getAggregatedWorkout,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts", getWorkouts);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.get("/workouts/range", getAggregatedWorkout);

module.exports = router;
