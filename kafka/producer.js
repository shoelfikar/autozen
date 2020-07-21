require('dotenv').config();
const kafka = require('kafka-node');
const client = new kafka.KafkaClient(process.env.KAFKA_HOST_URL);
const producer = new kafka.HighLevelProducer(client);


producer.on('ready', () => {
  console.log('Kafka Producer is conected and ready!');
});


const kafkaSendProducer = (data) => {
  const buffer = new Buffer.from(JSON.stringify(data.body));
  const record = [
    {
      topic: data.topic,
      messages: buffer,
      attributes: data.attributes,
      partitionerType: data.partition
    }
  ];
  producer.send(record, (err, data) => {
    if(err) {
      console.log('producer-error-send');
    }
    console.log(`Send data to ${JSON.stringify(data)} Data has been send`);
  });
};

producer.on('error', async (error) => {
  console.log('Kafka Producer Error');
});


module.exports = {
  kafkaSendProducer
};