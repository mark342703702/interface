'use strict';
import formidable from 'formidable'
import path  from 'path'
import fs from 'fs'

class Upload{

    //头像上传
    async avatar(req, res, next){

        const form = new formidable.IncomingForm();
        form.uploadDir=path.join(__dirname, '../../public/images/avatar');
        //设置编辑
        form.encoding = 'utf-8';
        //设置文件存储路径
        form.keepExtensions = true;
        //保留后缀
        form.keepExtensions = true;
        //设置单文件大小限制(20m)
        form.maxFieldsSize = 20 * 1024 * 1024;
        //设置所以文件的大小总和(40m)
        form.maxFields = 40* 1024 * 1024;
        form.parse(req, function (err, fields, files) {
            if(err){
                 return console.log('formidable, form.parse err');
            }
            console.log(fields);
            console.log(files)
            // 返回结果

            res.status(200).send({
              timestamp: 'sds',
            });
        })
    }

}

export default new Upload();
