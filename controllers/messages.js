const sender = require('../models').Message;
const user = require('../models').User;
const inspector = require('../models').Inspector;
const helpers = require('../helpers/helpers');
const producer = require('../kafka/producer');
const consumer = require('../kafka/consumer');
const sendEmail = require('../helpers/sendMail');
const { Op } = require('sequelize');


const sendMessage = async (req, res) => {
  try{
    userId = req.params.userId;
    const data = await user.findOne({
      where: {
        id: userId
      }
    })
    if (data) {
      const input = await sender.create({
        message: req.body.message,
        time: new Date(),
        available: 1,
        location: req.body.location,
        user_id: userId,
        finish: 0
      })
      if (input === undefined) {
        helpers.response(res, null, 404, 'Data Not Found!', null);
      } else {
        const dataToKafka = {
          topic: 'autozen-message',
          attributes: 1,
          body: {
            message_id: input.dataValues.id,
            time: input.time,
            user_id: input.user_id,
            name: data.dataValues.name,
            available: input.available,
            location: input.location,
            finish: input.finish
          },
          partition: 1
        };
        await producer.kafkaSendProducer(dataToKafka);
        helpers.response(res, input, 201, 'Inspection anda telah di post, silahkan tunggu respon inspector', null);
      }
    } else {
      helpers.response(res, null, 404, 'Data Not Found!', null);
    }
  } catch (err) {
    console.log(err)
    helpers.response(res, null, 500, 'Internal server Error', err);
  }
}




const getMessage = async (req, res) => {
  const dataConsumer = {
    topic: 'autozen-message',
    groupId: 'autozen-id'
  };
  const kafkaConsumer = new consumer(dataConsumer);
  kafkaConsumer.on('message', async (message) => {
    try {
      const value = JSON.parse(message.value);
      const messages = await sender.findOne({
        where: {
          id: value.message_id
        }
      })
      const data = await inspector.findOne({
        where: {
          location: {
            [Op.or]: {
              [Op.eq]: value.location,
              [Op.lte]: value.location
            }
          }
        }
      })
      if (data) {
        const mailOptions = {
          from: process.env.EMAIL,
          to: data.dataValues.email,
          subject: 'Inspection Request',
          html: `
            <h3>Inspection Request</h3>
            <p>Inspection Post : ${value.name}</p>
            <p>${messages.dataValues.message}</p>
            <p>Location: ${messages.dataValues.location}</p>
          `
        }
        const result = sendEmail.sendMail(mailOptions);
        if(result.error){
          console.log(new Error('error'))
        }
        console.log(`data berhasil dikirim!`);
      }
    } catch (err) {
      console.log(err)
      helpers.response(res, null, 500, 'Internal server Error', err);
    }
  });
}



const reSendEmail = async (req, res) => {
  try{
    setTimeout(() => {
      
    }, 6000)
  } catch (err) {

  }
}




module.exports = {
  sendMessage,
  getMessage
}