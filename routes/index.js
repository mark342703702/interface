'use strict';

import admin from './admin';
import Check from '../middlewares/check';

export default app => {
	app.use('/admin',[Check.checkToken] ,admin);
}
