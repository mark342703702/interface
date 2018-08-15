import jwt from 'jwt-simple';
import config from 'config-lite';
import AdminModel from '../models/admin/admin';

class Check {
      //检查是否包含token
      async checkToken(req, res, next){
        let token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
        if(token){
            try{
              let decoded = jwt.decode(token, config.jwtTokenSecret);
              if (decoded.exp <= Date.now() && decoded.exp) {
                  res.status(401).json({
                      message : 'token已经过期，请重新登陆'
                  })
              }
              // console.log(token)
              // console.log(decoded);
              const admin = await AdminModel.findOne({admin_id: decoded.iss});
              //取值
              let {
                  admin_name : name,
                  admin_id : aid,
                  avatar,
                  phone,
                  status
               } = admin;
              req.user = {name, aid, avatar, phone, status};
              next();
            }catch(e){
               return next();
            }
        }else{
          next();
        }

      }

}

export default new Check();
