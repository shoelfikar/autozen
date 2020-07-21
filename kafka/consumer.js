require('dotenv').config();
const kafka = require('kafka-node');
const Consumer = kafka.ConsumerGroup;
class ConsumerKafka {
  constructor(data) {
    let options = {
      kafkaHost: process.env.KAFKA_HOST_URL,// connect directly to kafka broker (instantiates a KafkaClient)
      autoCommit: true,
      fetchMaxBytes: 10 * 1024 * 1024,
      groupId: data.groupId,
      sessionTimeout: 15000,
      protocol: ['roundrobin'],
      fromOffset: 'latest', // default
      encoding: 'utf8',
      keyEncoding: 'utf8'
    };
    return new Consumer(options,data.topic);
  }
}

module.exports = ConsumerKafka;
