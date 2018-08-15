'use strict';
import formidable from 'formidable'
var path = require('path');

class Upload{

    //头像上传
    async avatar(req, res, next){
        const form = new formidable.IncomingForm();
        form.uploadDir = '/';
        form.keepExtensions=true;

        form.on('error', function(err) {
            console.log(err); //各种错误
        })

        form.on('file', function(field, file){
            console.log(file)
            console.log(field)
            return res.send('s')
        })
        console.log(form.type);
       
        res.send('s')
    }

}

export default new Upload();
