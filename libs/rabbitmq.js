// libs/rabbitmq.js
const amqp = require("amqplib");

let channel;

async function connectRabbitMQ() {
  const connection = await amqp.connect(
    process.env.RABBITMQ_URL || "amqp://localhost:5672"
  );
  channel = await connection.createChannel();
  console.log("RabbitMQ connected");
}

async function publish(queue, message) {
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });
}

async function subscribe(queue, callback) {
  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      const data = JSON.parse(msg.content.toString());
      callback(data);
      channel.ack(msg);
    }
  });
}

module.exports = {
  connectRabbitMQ,
  publish,
  subscribe,
};
