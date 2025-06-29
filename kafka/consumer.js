// consumer.js
const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "demo-consumer",
  brokers: ["localhost:19092"],
});

const consumer = kafka.consumer({ groupId: "demo-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "demo-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
