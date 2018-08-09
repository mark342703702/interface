'use strict';

import express from 'express'
import Admin from '../controller/admin/admin'
const router = express.Router()


router.post('/login', Admin.login);  //登陆

router.post('/register', Admin.register);
router.get('/test', Admin.test);

export default router
