'use strict';

import mongoose from 'mongoose';
import {setPasswordCrtpto} from '../../utils/index';
const Schema = mongoose.Schema;

const girlSchema = new Schema({
    //姓名
    girl_name: { type: String, required: true, unique: true},
    //职员id
    girl_id : {type: String, unique: true, required : true},
    //密码
    password: { type: String, required: true, set : setPasswordCrtpto},
    //电话
    phone : { type: String},
    //创建时间
    create_time: {type : Date, default : Date.now},
    //头像
	  avatar: {type: String, default: '/images/default.jpg'},
    //Girl:职员
    status: { type : String, enum : ['girl'], required: true, default : 'girl'},
});

girlSchema.index({id: 1});

const Girl = mongoose.model('Girl', girlSchema);

export default Girl;
