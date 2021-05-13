const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    device_token: { type: String, required: false, trim: true ,default:''},
    name: { type: String, required: false, trim: true ,default:''},
    mobile: { type: String, required: false, trim: true,default:''},
    email: { type: String, required: false, trim: true ,default:''},
    permanenet_address: { type: String, required: false, trim: true ,default:''},
    shipping_address: { type: String, required: false, trim: true ,default:''},
    role: { type: String, required: false, trim: true ,default:''},
    is_both_address_same: { type: Boolean, required: false, trim: true,default:false },
    password: { type: String, required: false, trim: true ,default:''},
    document_images:[{
      path:{ type: String, required: false, trim: true ,default:''}
    }],
    profile_pic:[ {
      path:{ type: String, required: false, trim: true ,default:''}
    }],
    is_approved: { type: Boolean, required: false, trim: true,default:false },
    is_delete: { type: Boolean, required: false, trim: true,default:false },
    is_email_verified: { type: Boolean, required: false, trim: true,default:false },
    is_mobile_verified: { type: Boolean, required: false, trim: true,default:false },
    terms_condition:{ type: Boolean, required: false, trim: true,default:false },
    is_token:{ type: String, default:''}
  });
module.exports = mongoose.model('User', UserSchema);
