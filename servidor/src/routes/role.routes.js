const router = require("express").Router();
const protectedRoute = require("../middlewares/protected.middleware");
const apiKeyMiddleware = require('../middlewares/apiKey.middlewar');

const controller = require("../controllers/role.controller");

router.get("/", apiKeyMiddleware, controller.getAll);
router.get("/:id", apiKeyMiddleware, controller.getById);
router.post("/", protectedRoute('admin'), controller.created);
router.put("/", protectedRoute('admin'), controller.updated);
router.delete("/:id", protectedRoute('admin'), controller.deleted);

module.exports = router;