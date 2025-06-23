// producer.js
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "demo-producer",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: "demo-topic",
    messages: [{ value: "Hello KafkaJS user!" }, { value: "Another message" }],
  });
  console.log("Messages sent!");
  await producer.disconnect();
};

run().catch(console.error);
