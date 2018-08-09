'use strict';
import AdminModel from '../../models/admin/admin';
import {setRandomId, setPasswordCrtpto, setToken} from '../../utils/index';

class Admin{

    //登陆
    async login(req, res, next){
        let { type } = req.body;
        console.log(req.body)
        if(type === 'admin'){
            let { adminName, adminPassword } = req.body;

            try {
                const result = await AdminModel.findOne({admin_name : adminName})
                if( result && result.password === setPasswordCrtpto(adminPassword)){
                    res.status(200).json({
                        message : '登录成功',
                        token : setToken(result.admin_id)
                    })
                }else{
                    res.status(401).json({
                        message : '用户密码错误'
                    })
                }
            } catch (err) {
                  res.status(401).json({
                      message : '登录失败',
                      err : err
                  })
                  return;
            }
        }
    }

    async addAdmin(req, res, next){
        // try{
        //     const admin = await AdminModel.findOne({})
        // }
    }

    async register(req, res, next){

        // console.log(req)
        console.log(req.body)
        res.status(200).send({
          timestamp: 1513932555104,
          status: 401,
          error: 'Unauthorized',
          message: 'Unauthorized',
          path: '/base/category/list',
        });
    }

    async test(req, res, next){
        
        res.status(200).send({
          timestamp: 'sds',
        });
    }
}

export default new Admin()
