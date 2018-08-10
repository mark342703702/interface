'use strict';

import express from 'express'
import Admin from '../controller/admin/admin'
import Check from '../middlewares/check'
const router = express.Router()


router.post('/login', Admin.login);  //登陆
router.get('/getUser',[Check.checkToken], Admin.getUser) //通过token返回用户信息

router.post('/register', Admin.register);
router.get('/test', [Check.checkToken], Admin.test);

export default router
