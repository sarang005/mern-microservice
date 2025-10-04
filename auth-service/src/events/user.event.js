const amqp = require("amqplib");

const QUEUE = "user_events";
let channel;

async function connect() {
  const connection = await amqp.connect(
    process.env.RABBITMQ_URL || "amqp://rabbitmq:5672"
  );
  channel = await connection.createChannel();
  await channel.assertQueue(QUEUE, { durable: true });
  console.log("Connected to RabbitMQ");
}

async function publish(event, data) {
  if (!channel) await connect();
  channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify({ event, data })), {
    persistent: true,
  });
}

async function consume(handler) {
  if (!channel) await connect();
  channel.consume(QUEUE, (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString());
      handler(content);
      channel.ack(msg);
    }
  });
}

module.exports = { connect, publish, consume };
