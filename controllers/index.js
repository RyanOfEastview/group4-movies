//  Here we are collecting the packaged gropu of API endpoints and prefixing them with the path /api

const router = require("express").Router();
const homeRoutes = require("./home-routes");


const apiRoutes = require("./api/");



router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
