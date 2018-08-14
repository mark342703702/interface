'use strict';
import request from 'request';
import config from 'config-lite';
import { setToken } from '../../utils/index';

class WX{
     constructor(){
        this.login = this.login.bind(this);
        this.getSessionKey = this.getSessionKey.bind(this);
     }

     // code 换取 session_key
    async getSessionKey(code){
         const appid = config.weChat.appid;
		     const secret = config.weChat.appsecret;
         const getRequestData = (val) =>  new Promise((resolve, reject) => {
            request.get({
               uri : 'https://api.weixin.qq.com/sns/jscode2session',
               json: true,
               qs: { grant_type: 'authorization_code', appid, secret, js_code : val}
            }, (err, response, data)=>{
                if ( response.statusCode === 200 && !err) { resolve(data); }
                else { reject(err); }
            })
         })
         return getRequestData(code);
     }

     //登陆
     async login(req, res, next){
         let { code } = req.body;
         let result = await this.getSessionKey(code);
         console.log(result)
         if(result.session_key && result.openid){
             res.status(200).send({
                token: setToken(JSON.stringify(result)),
             });
         }else{
             res.status(401).send({
                error: result
             });
         }
     }
}

export default new WX()
