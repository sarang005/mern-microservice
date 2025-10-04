module.exports = {
  db: process.env.MONGO_URI || "mongodb://mongo:27017/microservices",
  rabbitmq: process.env.RABBITMQ_URL || "amqp://rabbitmq:5672",
  jwtSecret: process.env.JWT_SECRET || "secret",
};
