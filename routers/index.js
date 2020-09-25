const router = require("koa-router")();
const home = require("./home");
const api = require("./api");

router.use("/", home.routes(), home.allowedMethods());
router.use("/nodeApi", api.routes(), api.allowedMethods());
module.exports = router;
