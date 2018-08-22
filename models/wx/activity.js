'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { setRandomId } from '../../utils/index';
const activitySchema = new Schema({
    //标题
    title : { type: String,  required : true },

    //描述
    description : { type: String }

    //活动id
    acId : { type: String, unique: true,  required : true}

    //封面图
    cover : { type: String, required : true}

})

const Activity = mongoose.model('Activity', activitySchema)

export default Activity;
