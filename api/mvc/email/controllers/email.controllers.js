var EmailService =  require('../services/email.services');
var UsersService = require('../../users/services/UserServices');
var UtilsServices = require('../../utils/services/UtilsServices');
var ip = require("ip");
module.exports = {

  ForgotPassword:function(req,res) {
    var data = req.body;
    UsersService.GetUsers(data).then(function(result){
      console.log(result.data, ' - -  -data===');
      if(result.data.length > 0) {

        var url = `http://`+ip.address()+`:`+req.connection.localPort+`/#/reset-password?token=`;
        return EmailService.ForgotPassword(result.data[0],url);
      } else {
       return UtilsServices.ErrorResp([],'User does not exist');
      }
    }).then(function(email_result){
      console.log(email_result, ' - - - email_result');
      email_result.data.is_token =  email_result.token;
      let condition = {
        _id:email_result.data._id
      };
      return UsersService.UpdateUser(condition,email_result.data);
    }).then(function(final_resp){
      final_resp.message = 'Mail Sent Successfully';
      return res.json(final_resp);
    }).catch(function(error){
      console.log(error, ' -  - - -error');
      return res.json(error);
    });
  }
};
