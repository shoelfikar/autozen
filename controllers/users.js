const bcrypt = require('bcryptjs');
const nodeMailer = require('nodemailer');
const users = require('../models').User;
const helpers = require('../helpers/helpers');


const register = async (req, res) => {
  try{
    const salt = bcrypt.genSaltSync(10);
    const user = await users.findOne({
      where: {
        email: req.body.email
      }
    })
    if (user) {
      helpers.response(res, null, 403,'Email anda sudah terdaftar!', null);
    } else {
      if (req.body.name == '' || req.body.email == '' || req.body.password == '' || req.body.location == '') {
        helpers.response(res, null, 400, 'Data tidak boleh kosong!', null);
      } else {
        const data = await users.create({
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, salt),
          location: req.body.location
        })
        if (data === undefined) {
          helpers.response(res, null, 404, 'Data Not Found!', null);
        } else {
          helpers.response(res, data.dataValues, 200, 'Register berhasil!', null);
        }
      }
    }
  } catch (err){
    helpers.response(res, null, 500, 'Internal server Error', err);
  }
}



const loginUser = async (req, res) => {
  try{
    const user = await users.findOne({
      where: {
        email: req.body.email
      }
    });
    if (user) {
      const authorized = bcrypt.compareSync(req.body.password, user.dataValues.password);
      if (authorized) {
        user.dataValues.password = undefined;
        helpers.response(res, user.dataValues, 200, 'Login sukses', null);
      } else {
        helpers.response(res, null, 400, 'Password Salah!', null);
      }
    } else {
      helpers.response(res, null, 404, 'Email Not Found!', null);
    }
  } catch (err){
    helpers.response(res, null, 500, 'Internal Server Error', err);
  }
}

module.exports = {
  register,
  loginUser
}