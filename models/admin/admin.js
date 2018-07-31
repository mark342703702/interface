'use strict';

import mongoose from 'mongoose'
import {setPasswordCrtpto} from '../../utils/index'
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    //姓名
    admin_name: { type: String, required: true},
    //管理员id
    admin_id : {type: String, unique: true, required : true},
    //密码
    password: { type: String, required: true, set : setPasswordCrtpto},
    //电话
    phone : { type: String},
    //创建时间
    create_time: {type : Date, default : Date.now},
    //Admin:普通管理、 superAdmin:超级管理员
    status: { type : String, enum : ['Admin', 'superAdmin'], required: true, default : 'Admin'},
    //头像
	avatar: {type: String, default: 'default.jpg'}
})

adminSchema.index({id: 1});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin
