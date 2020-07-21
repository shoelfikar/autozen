const inspector = require('../models').Inspector;
const helpers = require('../helpers/helpers');


const inspectorRegister = async (req, res) => {
  try{
    const data = await inspector.findOne({
      where: {
        email: req.body.email
      }
    })
    if (data) {
      helpers.response(res, null, 403, 'Email anda sudah terdaftar!', null);
    } else {
      if (req.body.name == '' || req.body.email == '' || req.body.location == '' || req.body.work_time == '') {
        helpers.response(res, null, 400, 'Data tidak boleh kosong!', null);
      } else {
        const input = await inspector.create({
          name: req.body.name,
          email: req.body.email,
          location: req.body.location,
          work_time: req.body.work_time
        })
        if (input === undefined) {
          helpers.response(res, null, 404, 'Data Not Found!', null);
        } else {
          helpers.response(res, input, 201, 'Selamat anda sudah terdaftar sebagai inspector!', null);
        }
      }
    }
  } catch (err) {
    helpers.response(res, null, 500, 'Internal Server Error', err);
  }
}




module.exports = {
  inspectorRegister
}
