// 服务
// 日志
const fastify = require("fastify")({
  logger: true,
});
const routes = require("./routes");
const swagger = require("./config/swagger");

fastify.register(require("fastify-swagger"), swagger.options);

routes.forEach((route, index) => {
  fastify.route(route);
});
// 定义路由
fastify.get("/", async (request, reply) => {
  return { message: "Hello Restful Api" };
});

// 启动服务
const start = async () => {
  try {
      await fastify.listen(8100);
      fastify.swagger();
      fastify.log.info(`服务运行端口： ${fastify.server.address().port}`);
  } catch (err) {
      fastify.log.error(err);
      process.exit(1);
  }
};

start();

const mongoose = require("mongoose");

// 连接数据库
mongoose
    .connect("mongodb://localhost/localhost_27017")
    .then(() => console.log("MongoDB 已连接"))
    .catch((err) => console.log(err));
