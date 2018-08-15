'use strict';
import AdminModel from '../../models/admin/admin';
import {setRandomId, setPasswordCrtpto, setToken} from '../../utils/index';
import jwt from 'jwt-simple';

class Admin{
    //系统管理员登陆
    async login(req, res, next){
        let { type } = req.body;
        console.log(req.body)
        if(type === 'admin'){
            let { adminName, adminPassword } = req.body;

            try {
                const result = await AdminModel.findOne({admin_name : adminName})
                if( result && result.password === setPasswordCrtpto(adminPassword)){
                    // console.log(result)
                    res.status(200).json({
                        message : '登录成功',
                        token : setToken(result.admin_id),
                        user : {
                            name : result.admin_name,
                            phone : result.phone,
                            aid : result.admin_id,
                            status : result.status,
                            avatar : result.avatar
                        }
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



    //增加系统管理员
    async addAdmin(req, res, next){
      res.status(200).json({user : 's'})
    }

    //通过token返回用户信息
    async getUser(req, res, next){
       let user = req.user
       res.status(200).json(user)
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
        console.log(this)
        res.status(200).send({
          timestamp: 'sds',
        });
    }
}

export default new Admin()
