//  Here we are collecting the packaged gropu of API endpoints and prefixing them with the path /api

const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
