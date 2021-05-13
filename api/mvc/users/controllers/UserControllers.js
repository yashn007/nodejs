var UsersServices =  require('../services/UserServices');
var UtilsService = require('../../utils/services/UtilsServices');
var config =  require('../../../config/config');
var cryptoJs = require('crypto-js');

module.exports = {

  CreateAccount:function(req, res) {
    var data = req.body;
    var pwd =  cryptoJs.SHA256(data.password);
    data.password = pwd.toString();
    UsersServices.CreateAccount(data).then(function(result){
      return res.json(result);
    }).catch(function(error){
      return res.json(erro);
    })
  },

  UserLogin:function(req, res) {
    var data = req.body;
    var condition = {
      email:data.email,
      is_delete:false
    };
    UsersServices.GetUsers(condition).then(function(result) {
      if(result.data.length > 0) {
        return UsersServices.ValidateLoggedInUser(result.data,data);
      } else {
        return UtilsService.ErrorResp([],'User does not exist');
      }
    }).then(function(validate_result){
      req.session.user =  validate_result.data;
      return res.json(validate_result);
    }).catch(function(error){
      console.log(error, '  - - - error = ');
      return res.json(error);
    })
  },

  IsSession:function(req, res) {
      console.log(req.connection.localAddress, ' -  - -address',req.connection.remoteAddress);

      console.log(req.connection.remotePort, ' -  - -address',req.connection.localPort);

    var token = req.headers.token;
    if(req.session.user && req.session.user.token  ==  token) {
      var user =  req.session.user;
      var condition = {
        _id:user._id
      };
      UsersServices.GetUsers(condition).then(function(result){
        if(result.data.length > 0) {
          var user_data = result.data[0];
          var new_user_obj = {
            _id:user_data._id,
            name:user_data.name,
            email:user_data.email,
            token:token,
            is_mobile_verified:user_data.is_mobile_verified,
            is_both_address_same: user_data.is_both_address_same,
            is_approved: user_data.is_approved,
            is_delete: user_data.is_delete,
            is_email_verified: user_data.is_email_verified,
            role: user_data.role,
            document_images: [],
            profile_pic: [],
            mobile:user_data.mobile
          };
          req.session.user = new_user_obj;
          var resp = {
            success:true,
            message:'Session Exist',
            data:new_user_obj
          };
          return res.json(resp);
        } else {
          return UtilsService.ErrorResp([],'User does not exist');
        }
      }).catch(function(error){
        console.log(error, '  - - - error');
        return res.json(error);
      });
    } else {
      var resp = {
        success:false,
        message:'Token expired',
        data:''
      };
      return res.json(resp);
    }
  },

  ResetPassword:function(req, res) {
    var data = req.body;
    var pwd =  cryptoJs.SHA256(data.password);
    data.password =  pwd.toString();
    var condition = {
      is_token:data.token
    };
    UsersServices.GetUsers(condition).then(function(result) {
      if(result.data.length > 0) {
        delete data.c_password;
        data.is_token = '';
        return UsersServices.UpdateUser(condition, data);
      } else {
        return UtilsService.ErrorResp([],'Link Already Used');
      }
    }).then(function(Updated_result){
      Updated_result.message = ' Password Reset Successfully';
      return res.json(Updated_result);
    }).catch(function(error){
      console.log(error, '  - - - error = ');
      return res.json(error);
    })
  }
};
