const mailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (mailOptions) => {
  const transporter = mailer.createTransport({
      service : 'gmail',
      auth : {
        user : process.env.EMAIL,
        pass : process.env.EMAIL_PASS
      }
    })
  try {
    let result = new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, async (error) => {
        if (error) {
          reject(error);
        }
        resolve('Send Email Success');
      });
    });
    return Promise.resolve(result)
      .then(res => console.log(res))
      .catch(err => new Error(`Send Email Error ${err}`));
  } catch (err) {
    console.log('info', 'error send email', 'User - doSendFeedback.transporter.sendMail');
  }
};



module.exports = {
  sendMail
}