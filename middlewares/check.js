import jwt from 'jwt-simple';
import config from 'config-lite';

class Check {
      //检查是否包含token
      async checkToken(req, res, next){
        let token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

        if(token){
            try{
              let decoded = jwt.decode(token, config.jwtTokenSecret);
              if (decoded.exp <= Date.now()) {
                  res.status(401).json({
                      message : '没有权限'
                  })
              }
              // console.log(decoded)
            }catch(e){
               return next();
            }
        }else{
          next();
        }

      }




}

export default new Check();
