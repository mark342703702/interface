'use strict';

import admin from './admin';
import wx from './wx';

export default app => {
	app.use('/admin' ,admin);
	app.use('/wx' ,wx);
}
