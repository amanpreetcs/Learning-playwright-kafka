// producer.js
const { Kafka } = require("kafkajs");
const { argv } = require("process");
const prompt = require('prompt-sync')();



const kafka = new Kafka({
  clientId: "demo-producer",
  brokers: ["localhost:19092"],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  const userMessage = prompt('What is your name? ');
  console.log(`Hello, ${userMessage}!`);
  await producer.send({
    topic: "demo-topic",
    messages: [{ value: userMessage }],
  });
  console.log("Messages sent!");
  await producer.disconnect();
};

run().catch(console.error);
