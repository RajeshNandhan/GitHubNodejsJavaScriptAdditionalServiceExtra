const { Router } = require("express");
const pingController = require("../controllers/PingController");
const router = Router();

router.get("/", pingController.getEnvironmentValuesEndPoint);

module.exports = router;