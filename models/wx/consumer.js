'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const consumerSchema = new Schema({

     //昵称(微信中的昵称)
     nickName : { type: String },

     //性别 0代表未知 1代表男性 2代表女性
     gender : { type : Number, enum:[0, 1, 2], default : 0}

     //用来标识用户在小程序里的唯一性
     openid : { type: String, unique: true, required : true },

     //微信服务器临时密匙
     session_key : { type: String, unique: true, required : true }

})

const Consumer = mongoose.model('Consumer', consumerSchema)

export default Consumer;
