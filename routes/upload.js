'use strict';

import express from 'express'
import Upload from '../controller/upload/upload'

const router = express.Router()

router.post('/avatar', Upload.avatar); //管理员头像上传

export default router
