const { Router } = require("express");
const {
  renderExercise,
  renderHome,
  renderStats,
} = require("../../controllers/html");

const router = Router();

router.get("/stats", renderStats);
router.get("/exercise", renderExercise);
router.get("/", renderHome);

module.exports = router;
