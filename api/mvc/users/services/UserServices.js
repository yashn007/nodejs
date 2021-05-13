var q = require('q');
var CryptoJS =  require('crypto-js');
var config =  require('../../../config/config');
var UserModels = require('../models/UserModels');
var jwt = require('jsonwebtoken')
var _ = require('underscore');

function UsersServices() {
  function CreateAccount(data){
    var deferred =  q.defer();
    UserModels.create(data).then(function(result){
      var resp = {
        success:true,
        message:'You are registered Successfully',
        data:result
      };
      deferred.resolve(resp);
    }).catch(function(error){
      var resp = {
        success:false,
        message:'Error in processing',
        data:error
      };
      deferred.reject(resp);
    });
    return deferred.promise;
  };

  function GetUsers(condition){
    var deferred = q.defer();
    console.log( ' -  - -',condition);
    UserModels.find(condition).then(function(result){
      var resp = {
        success:true,
        message:'Users Gets Successfully',
        data:result
      };
      deferred.resolve(resp);
    }).catch(function(error) {
      var resp = {
        success:false,
        message:'Error in processing',
        data:error
      };
      deferred.reject(resp);
    });
    return deferred.promise;
  };

  function UpdateUser(condition,data){
    var deferred = q.defer();
    UserModels.findOneAndUpdate(condition,{$set:data}).then(function(result){
      var resp = {
        success:true,
        message:'Users Updated Successfully',
        data:result
      };
      deferred.resolve(resp);
    }).catch(function(error) {
      var resp = {
        success:false,
        message:'Error in processing',
        data:error
      };
      deferred.reject(resp);
    });
    return deferred.promise;
  };

  function ValidateLoggedInUser(data,req_obj){
    var deferred = q.defer();
    var user_data =  _.clone(data[0]);
    var userPassword = CryptoJS.SHA256(req_obj.password);
    GenerateToken(user_data._id).then(function(token){
      if(userPassword ==  user_data.password.toString()){
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
        var resp = {
          success:true,
          message:'User Verified',
          data:new_user_obj
        };
        deferred.resolve(resp);
      } else {
        var resp = {
          success:false,
          message:'Password Does not match',
          data:''
        };
        deferred.reject(resp);
      }
    });
    // console.log('I am here in 56',token);

    return deferred.promise;
  };

  function GenerateToken(id) {
    var deferred = q.defer();
    var token = jwt.sign({
      _id: id
    }, config.secret);
    deferred.resolve(token);
    return deferred.promise;
  }
  return {
    CreateAccount:CreateAccount,
    GetUsers:GetUsers,
    ValidateLoggedInUser:ValidateLoggedInUser,
    GenerateToken:GenerateToken,
    UpdateUser:UpdateUser
  };
};

module.exports = UsersServices();
