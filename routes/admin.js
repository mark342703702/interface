'use strict';

import express from 'express'
import Admin from '../controller/admin/admin'
import Check from '../middlewares/check'
const router = express.Router()

router.post('/login', Admin.login);  //系统管理员登陆
router.get('/addAdmin', Admin.addAdmin); //增加系统管理员

router.get('/getUser',[Check.checkToken], Admin.getUser) //通过token返回用户信息
router.post('/register', Admin.register);
router.get('/test', Admin.test);

export default router
