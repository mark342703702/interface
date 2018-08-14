'use strict';

import express from 'express'
import WX from '../controller/wx/wx'
const router = express.Router()


router.post('/login', WX.login);  //登陆

export default router
