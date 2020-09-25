const Koa = require("koa");
const app = new Koa();
// const koaServerHttpProxy = require("koa-server-http-proxy");
const router = require("./routers/index");
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log("[demo] start-quick is starting at port 3000");
});
