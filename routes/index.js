'use strict';

import admin from './admin';
import wx from './wx';
import upload from './upload'

export default app => {
	app.use('/admin' ,admin);
	app.use('/wx' ,wx);
	app.use('/upload' ,upload);
}
