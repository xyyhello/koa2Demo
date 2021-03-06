const router = require("koa-router")();

module.exports = router
  .get("/get/data", async (ctx) => {
    ctx.body = {
      success: true,
      data: {
        text: "hello world!",
      },
    };
  })
  .get("/get/user", async (ctx) => {
    ctx.body = {
      success: true,
      data: {
        text: "my name is koa.js!",
      },
    };
  })
  .post("/downloadFile", async (ctx) => {
    ctx.body = {
      success: true,
      data: {
        text: "downLoad!",
      },
    };
  });
